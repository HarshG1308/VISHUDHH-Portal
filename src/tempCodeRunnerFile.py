from flask import Flask, jsonify, request
from ultralytics import YOLO
import numpy as np
import cv2
import base64
import settings
from flask_cors import CORS
from datetime import datetime
from pymongo import MongoClient
import gridfs
import io
import time
from threading import Thread

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
mongo_client = MongoClient('mongodb://localhost:27017/')
db = mongo_client['waste_detection']
fs = gridfs.GridFS(db)

# Load the YOLO model
model = YOLO(r"src\weights\best.pt")

def calculate_cleanliness_score(detected_counts):
    """
    Calculate cleanliness score based on detected waste categories.
    Returns 100 if no waste is detected.
    """
    if sum(detected_counts.values()) == 0:
        return 100
        
    deductions = {
        'recyclable': -5,
        'non_recyclable': -10,
        'hazardous': -20
    }
    
    base_score = 100
    score_change = sum(deductions[category] * count 
                      for category, count in detected_counts.items())
    
    updated_score = max(0, min(100, base_score + score_change))
    return updated_score

def process_and_save_image(image_data, camera_id="default"):
    """Process the image and save both image and metadata to MongoDB"""
    try:
        # Decode the image
        if isinstance(image_data, str) and "base64" in image_data:
            # Handle base64 string from frontend
            image_data = base64.b64decode(image_data.split(",")[1])
            np_img = np.frombuffer(image_data, np.uint8)
            image = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
        else:
            # Handle binary image data
            np_img = np.frombuffer(image_data, np.uint8)
            image = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
        
        # Ensure image is in correct format for model (640x640)
        image = cv2.resize(image, (640, 640))

        # Run detection with increased confidence threshold
        results = model.predict(image, conf=0.45, iou=0.45)
        
        detected_counts = {
            'recyclable': 0,
            'non_recyclable': 0,
            'hazardous': 0
        }
        
        detected_items = {
            'recyclable': [],
            'non_recyclable': [],
            'hazardous': []
        }

        # Process detections with confidence scores
        for result in results:
            boxes = result.boxes
            for box, conf in zip(boxes.cls, boxes.conf):
                item_name = model.names[int(box)]
                confidence = float(conf)
                
                if item_name in settings.RECYCLABLE:
                    detected_counts['recyclable'] += 1
                    detected_items['recyclable'].append(f"{item_name} ({confidence:.2f})")
                elif item_name in settings.NON_RECYCLABLE:
                    detected_counts['non_recyclable'] += 1
                    detected_items['non_recyclable'].append(f"{item_name} ({confidence:.2f})")
                elif item_name in settings.HAZARDOUS:
                    detected_counts['hazardous'] += 1
                    detected_items['hazardous'].append(f"{item_name} ({confidence:.2f})")

        # Calculate score based on current detections only
        current_score = calculate_cleanliness_score(detected_counts)
        timestamp = datetime.now()

        # Encode image to JPEG for storage
        _, buffer = cv2.imencode('.jpg', image)
        image_binary = buffer.tobytes()
        
        # Save image to GridFS
        file_id = fs.put(
            image_binary, 
            filename=f"{camera_id}_{timestamp.strftime('%Y%m%d_%H%M%S')}.jpg",
            content_type="image/jpeg"
        )
        
        # Save metadata to MongoDB collection
        metadata = {
            "camera_id": camera_id,
            "timestamp": timestamp,
            "cleanliness_score": current_score,
            "detected_counts": detected_counts,
            "detected_items": detected_items,
            "image_file_id": file_id
        }
        
        db.detections.insert_one(metadata)
        
        return {
            "cleanliness_score": current_score,
            "timestamp": timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            "detected_items": detected_items,
            "detected_counts": detected_counts,
            "image_id": str(file_id)
        }
        
    except Exception as e:
        print(f"Error processing image: {str(e)}")
        return {"error": str(e)}

@app.route("/detect", methods=["POST"])
def detect():
    """Detect waste in an image and classify it."""
    try:
        data = request.json
        image_base64 = data.get("image")
        camera_id = data.get("camera_id", "default")

        if not image_base64:
            return jsonify({"error": "No image provided"}), 400

        result = process_and_save_image(image_base64, camera_id)
        
        if "error" in result:
            return jsonify({"error": result["error"]}), 500
            
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/history", methods=["GET"])
def get_history():
    """Get detection history for a camera"""
    try:
        camera_id = request.args.get("camera_id", "default")
        limit = int(request.args.get("limit", 100))
        
        # Get the most recent detections for this camera
        detections = list(db.detections.find(
            {"camera_id": camera_id},
            {"_id": 0, "image_file_id": 1, "timestamp": 1, "cleanliness_score": 1, "detected_counts": 1}
        ).sort("timestamp", -1).limit(limit))
        
        # Convert ObjectId and datetime to string for JSON serialization
        for detection in detections:
            detection["image_file_id"] = str(detection["image_file_id"])
            detection["timestamp"] = detection["timestamp"].strftime("%Y-%m-%d %H:%M:%S")
        
        return jsonify({"history": detections})
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/image/<image_id>", methods=["GET"])
def get_image(image_id):
    """Retrieve an image from GridFS by its ID"""
    try:
        # Convert string ID to ObjectId
        from bson.objectid import ObjectId
        file_id = ObjectId(image_id)
        
        # Get file from GridFS
        file_data = fs.get(file_id)
        
        # Return the binary data with proper content type
        from flask import Response
        return Response(file_data.read(), mimetype="image/jpeg")
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Scheduled image capture function
def scheduled_capture(camera_sources):
    """Periodically capture images from cameras and save to database"""
    while True:
        for camera_id, camera_url in camera_sources.items():
            try:
                # For webcam/RTSP/HTTP sources
                cap = cv2.VideoCapture(camera_url)
                ret, frame = cap.read()
                cap.release()
                
                if ret:
                    # Convert frame to binary data
                    _, buffer = cv2.imencode('.jpg', frame)
                    image_binary = buffer.tobytes()
                    
                    # Process and save
                    process_and_save_image(image_binary, camera_id)
                    print(f"Captured and saved image from camera {camera_id}")
                else:
                    print(f"Failed to capture image from camera {camera_id}")
            
            except Exception as e:
                print(f"Error capturing from camera {camera_id}: {str(e)}")
        time.sleep(60)

if __name__ == "__main__":
    camera_sources = {
        "main_entrance": 0,  # Default webcam (can be replaced with actual URL)
        # Add more cameras as needed:
        # "parking_lot": "rtsp://username:password@192.168.1.100:554/stream1",
        # "loading_dock": "http://192.168.1.101/video_feed",
    }    
    # Start the scheduled capture in a background thread
    capture_thread = Thread(target=scheduled_capture, args=(camera_sources,), daemon=True)
    capture_thread.start()
    
    # Start the Flask app
    app.run(host="0.0.0.0", port=8000, debug=True)