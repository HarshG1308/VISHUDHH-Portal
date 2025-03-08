// // import React, { useState, useRef, useEffect } from "react";
// // import Webcam from "react-webcam";
// // import axios from "axios";

// // function CameraDetail() {
// //   const [cleanlinessScore, setCleanlinessScore] = useState(100);
// //   const [scoreHistory, setScoreHistory] = useState([]);
// //   const [detectedItems, setDetectedItems] = useState({
// //     recyclable: [],
// //     non_recyclable: [],
// //     hazardous: []
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const webcamRef = useRef(null);
// //   const intervalRef = useRef(null);

// //   // Webcam constraints for better detection
// //   const videoConstraints = {
// //     width: 640,
// //     height: 640,
// //     facingMode: "environment"
// //   };

// //   const processFrame = async () => {
// //     if (!webcamRef.current || loading) return;

// //     const imageSrc = webcamRef.current.getScreenshot();
// //     if (!imageSrc) {
// //       console.error("Unable to capture webcam frame.");
// //       return;
// //     }

// //     setLoading(true);

// //     try {
// //       const response = await axios.post("http://localhost:8000/detect", {
// //         image: imageSrc
// //       });

// //       const {
// //         cleanliness_score,
// //         timestamp,
// //         detected_items,
// //         detected_counts
// //       } = response.data;

// //       // Only update score if there's a significant change
// //       setCleanlinessScore(prevScore => {
// //         const scoreDiff = Math.abs(prevScore - cleanliness_score);
// //         return scoreDiff > 1 ? cleanliness_score : prevScore;
// //       });
      
// //       setDetectedItems(detected_items);
      
// //       // Update score history only when items are detected or score changes
// //       if (Object.values(detected_counts).some(count => count > 0)) {
// //         setScoreHistory(prev => [{
// //           score: cleanliness_score,
// //           timestamp: timestamp,
// //           counts: detected_counts
// //         }, ...prev.slice(0, 9)]); // Keep last 10 entries
// //       }
      
// //     } catch (error) {
// //       console.error("Error detecting waste:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     intervalRef.current = setInterval(processFrame, 1000); // Increased frequency for better detection
// //     return () => {
// //       if (intervalRef.current) {
// //         clearInterval(intervalRef.current);
// //       }
// //     };
// //   }, []);

// //   const getScoreColor = (score) => {
// //     if (score >= 80) return "bg-green-100";
// //     if (score >= 60) return "bg-orange-100";
// //     return "bg-red-100";
// //   };

// //   const getScoreMessage = (score) => {
// //     if (score >= 80) return "Excellent! Area is clean.";
// //     if (score >= 60) return "Moderate. Some items need attention.";
// //     return "Poor. Immediate cleaning recommended.";
// //   };

// //   return (
// //     <div className="flex">
// //       {/* Main Content */}
// //       <div className="w-3/4 p-6">
// //         <h2 className="text-2xl font-bold text-green-800 mb-4">Real-time Waste Detection</h2>

// //         {/* Webcam Display */}
// //         <div className="webcam-container mb-4 flex justify-center">
// //           <Webcam
// //             ref={webcamRef}
// //             screenshotFormat="image/jpeg"
// //             videoConstraints={videoConstraints}
// //             className="h-[640px] w-[640px] object-cover rounded-md"
// //           />
// //         </div>

// //         {/* Detected Items Display */}
// //         <div className="grid grid-cols-3 gap-4 mt-4">
// //           <div className="p-4 rounded-lg bg-yellow-100">
// //             <h3 className="font-bold mb-2">Recyclable Items</h3>
// //             <ul className="list-disc pl-4">
// //               {detectedItems.recyclable.length > 0 
// //                 ? detectedItems.recyclable.map((item, idx) => (
// //                     <li key={idx} className="text-sm">{item}</li>
// //                   ))
// //                 : <li>None detected</li>}
// //             </ul>
// //           </div>
// //           <div className="p-4 rounded-lg bg-blue-100">
// //             <h3 className="font-bold mb-2">Non-Recyclable Items</h3>
// //             <ul className="list-disc pl-4">
// //               {detectedItems.non_recyclable.length > 0 
// //                 ? detectedItems.non_recyclable.map((item, idx) => (
// //                     <li key={idx} className="text-sm">{item}</li>
// //                   ))
// //                 : <li>None detected</li>}
// //             </ul>
// //           </div>
// //           <div className="p-4 rounded-lg bg-red-100">
// //             <h3 className="font-bold mb-2">Hazardous Items</h3>
// //             <ul className="list-disc pl-4">
// //               {detectedItems.hazardous.length > 0 
// //                 ? detectedItems.hazardous.map((item, idx) => (
// //                     <li key={idx} className="text-sm">{item}</li>
// //                   ))
// //                 : <li>None detected</li>}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Sidebar */}
// //       <div className="w-1/4 p-6 bg-gray-50 min-h-screen">
// //         <h2 className="text-xl font-bold mb-4">Detection Console</h2>
        
// //         {/* Current Score */}
// //         <div className={`mb-6 p-4 rounded-lg ${getScoreColor(cleanlinessScore)}`}>
// //           <h3 className="text-lg font-bold text-center">Cleanliness Score</h3>
// //           <p className="text-3xl font-bold text-center">{cleanlinessScore.toFixed(1)}</p>
// //           <p className="text-center mt-2">{getScoreMessage(cleanlinessScore)}</p>
// //         </div>

// //         {/* Score History */}
// //         <div className="score-history">
// //           <h3 className="text-lg font-bold mb-2">Score History</h3>
// //           {scoreHistory.map((entry, idx) => (
// //             <div key={idx} className="mb-2 p-2 bg-white rounded shadow-sm">
// //               <p className="text-sm text-gray-600">{entry.timestamp}</p>
// //               <p className="font-bold">Score: {entry.score.toFixed(1)}</p>
// //               <p className="text-xs">
// //                 R: {entry.counts.recyclable} | 
// //                 NR: {entry.counts.non_recyclable} | 
// //                 H: {entry.counts.hazardous}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CameraDetail;

// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import Webcam from "react-webcam";

// function CameraDetail() {
//   const [cleanlinessScore, setCleanlinessScore] = useState(100);
//   const [scoreHistory, setScoreHistory] = useState([]);
//   const [detectedItems, setDetectedItems] = useState({
//     recyclable: [],
//     non_recyclable: [],
//     hazardous: []
//   });
//   const [loading, setLoading] = useState(false);
//   const [historyImages, setHistoryImages] = useState([]);
//   const [showHistory, setShowHistory] = useState(false);
//   const webcamRef = useRef(null);
//   const intervalRef = useRef(null);
//   const cameraId = window.location.pathname.split('/').pop() || "default";

//   // Webcam constraints for better detection
//   const videoConstraints = {
//     width: 640,
//     height: 640,
//     facingMode: "environment"
//   };

//   // Load history data on component mount
//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   const fetchHistory = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/history?camera_id=${cameraId}&limit=50`);
//       setHistoryImages(response.data.history);
//     } catch (error) {
//       console.error("Error fetching history:", error);
//     }
//   };

//   const processFrame = async () => {
//     if (!webcamRef.current || loading) return;

//     const imageSrc = webcamRef.current.getScreenshot();
//     if (!imageSrc) {
//       console.error("Unable to capture webcam frame.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:8000/detect", {
//         image: imageSrc,
//         camera_id: cameraId
//       });

//       const {
//         cleanliness_score,
//         timestamp,
//         detected_items,
//         detected_counts,
//         image_id
//       } = response.data;

//       // Only update score if there's a significant change
//       setCleanlinessScore(prevScore => {
//         const scoreDiff = Math.abs(prevScore - cleanliness_score);
//         return scoreDiff > 1 ? cleanliness_score : prevScore;
//       });
      
//       setDetectedItems(detected_items);
      
//       // Update score history only when items are detected or score changes
//       if (Object.values(detected_counts).some(count => count > 0)) {
//         setScoreHistory(prev => [{
//           score: cleanliness_score,
//           timestamp: timestamp,
//           counts: detected_counts,
//           image_id: image_id
//         }, ...prev.slice(0, 9)]); // Keep last 10 entries
//       }
      
//     } catch (error) {
//       console.error("Error detecting waste:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     intervalRef.current = setInterval(processFrame, 5000); // Process every 5 seconds to avoid overloading
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, []);

//   const getScoreColor = (score) => {
//     if (score >= 80) return "bg-green-100";
//     if (score >= 60) return "bg-orange-100";
//     return "bg-red-100";
//   };

//   const getScoreMessage = (score) => {
//     if (score >= 80) return "Excellent! Area is clean.";
//     if (score >= 60) return "Moderate. Some items need attention.";
//     return "Poor. Immediate cleaning recommended.";
//   };

//   const toggleHistory = () => {
//     setShowHistory(!showHistory);
//     if (!showHistory) {
//       fetchHistory();
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       {/* Tabs */}
//       <div className="flex border-b">
//         <button 
//           className={`px-4 py-2 ${!showHistory ? 'border-b-2 border-green-500 font-bold' : ''}`}
//           onClick={() => setShowHistory(false)}
//         >
//           Live Detection
//         </button>
//         <button 
//           className={`px-4 py-2 ${showHistory ? 'border-b-2 border-green-500 font-bold' : ''}`}
//           onClick={toggleHistory}
//         >
//           Previous Data
//         </button>
//       </div>

//       {!showHistory ? (
//         <div className="flex">
//           {/* Main Content */}
//           <div className="w-3/4 p-6">
//             <h2 className="text-2xl font-bold text-green-800 mb-4">Real-time Waste Detection</h2>

//             {/* Webcam Display */}
//             <div className="webcam-container mb-4 flex justify-center">
//               <Webcam
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 videoConstraints={videoConstraints}
//                 className="h-[640px] w-[640px] object-cover rounded-md"
//               />
//             </div>

//             {/* Detected Items Display */}
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               <div className="p-4 rounded-lg bg-yellow-100">
//                 <h3 className="font-bold mb-2">Recyclable Items</h3>
//                 <ul className="list-disc pl-4">
//                   {detectedItems.recyclable.length > 0 
//                     ? detectedItems.recyclable.map((item, idx) => (
//                         <li key={idx} className="text-sm">{item}</li>
//                       ))
//                     : <li>None detected</li>}
//                 </ul>
//               </div>
//               <div className="p-4 rounded-lg bg-blue-100">
//                 <h3 className="font-bold mb-2">Non-Recyclable Items</h3>
//                 <ul className="list-disc pl-4">
//                   {detectedItems.non_recyclable.length > 0 
//                     ? detectedItems.non_recyclable.map((item, idx) => (
//                         <li key={idx} className="text-sm">{item}</li>
//                       ))
//                     : <li>None detected</li>}
//                 </ul>
//               </div>
//               <div className="p-4 rounded-lg bg-red-100">
//                 <h3 className="font-bold mb-2">Hazardous Items</h3>
//                 <ul className="list-disc pl-4">
//                   {detectedItems.hazardous.length > 0 
//                     ? detectedItems.hazardous.map((item, idx) => (
//                         <li key={idx} className="text-sm">{item}</li>
//                       ))
//                     : <li>None detected</li>}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="w-1/4 p-6 bg-gray-50 min-h-screen">
//             <h2 className="text-xl font-bold mb-4">Detection Console</h2>
            
//             {/* Current Score */}
//             <div className={`mb-6 p-4 rounded-lg ${getScoreColor(cleanlinessScore)}`}>
//               <h3 className="text-lg font-bold text-center">Cleanliness Score</h3>
//               <p className="text-3xl font-bold text-center">{cleanlinessScore.toFixed(1)}</p>
//               <p className="text-center mt-2">{getScoreMessage(cleanlinessScore)}</p>
//             </div>

//             {/* Score History */}
//             <div className="score-history">
//               <h3 className="text-lg font-bold mb-2">Score History</h3>
//               {scoreHistory.map((entry, idx) => (
//                 <div key={idx} className="mb-2 p-2 bg-white rounded shadow-sm">
//                   <p className="text-sm text-gray-600">{entry.timestamp}</p>
//                   <p className="font-bold">Score: {entry.score.toFixed(1)}</p>
//                   <p className="text-xs">
//                     R: {entry.counts.recyclable} | 
//                     NR: {entry.counts.non_recyclable} | 
//                     H: {entry.counts.hazardous}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-green-800 mb-4">Historical Detection Data</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {historyImages.map((image, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
//                 <img 
//                   src={`http://localhost:8000/image/${image.image_file_id}`} 
//                   alt={`Detection ${idx}`} 
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-3">
//                   <p className="text-sm text-gray-600">{image.timestamp}</p>
//                   <p className="font-bold">Score: {image.cleanliness_score.toFixed(1)}</p>
//                   <p className="text-xs">
//                     R: {image.detected_counts.recyclable} | 
//                     NR: {image.detected_counts.non_recyclable} | 
//                     H: {image.detected_counts.hazardous}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {historyImages.length === 0 && (
//             <div className="text-center p-10">
//               <p className="text-gray-500">No historical data available</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CameraDetail;

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

function CameraDetail() {
  const [cleanlinessScore, setCleanlinessScore] = useState(100);
  const [scoreHistory, setScoreHistory] = useState([]);
  const [detectedItems, setDetectedItems] = useState({
    recyclable: [],
    non_recyclable: [],
    hazardous: []
  });
  const [loading, setLoading] = useState(false);
  const [historyImages, setHistoryImages] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [activeTab, setActiveTab] = useState("live");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("Never");
  const webcamRef = useRef(null);
  const intervalRef = useRef(null);
  const cameraId = window.location.pathname.split('/').pop() || "default";
  const camContainerRef = useRef(null);

  // Webcam constraints for better detection
  const videoConstraints = {
    width: 640,
    height: 640,
    facingMode: "environment"
  };

  // Load history data on component mount
  useEffect(() => {
    fetchHistory();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/history?camera_id=${cameraId}&limit=50`);
      setHistoryImages(response.data.history);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const processFrame = async () => {
    if (!webcamRef.current || loading) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      console.error("Unable to capture webcam frame.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/detect", {
        image: imageSrc,
        camera_id: cameraId
      });

      const {
        cleanliness_score,
        timestamp,
        detected_items,
        detected_counts,
        image_id
      } = response.data;

      // Only update score if there's a significant change
      setCleanlinessScore(prevScore => {
        const scoreDiff = Math.abs(prevScore - cleanliness_score);
        return scoreDiff > 1 ? cleanliness_score : prevScore;
      });
      
      setDetectedItems(detected_items);
      setLastUpdated(timestamp);
      
      // Update score history only when items are detected or score changes
      if (Object.values(detected_counts).some(count => count > 0)) {
        setScoreHistory(prev => [{
          score: cleanliness_score,
          timestamp: timestamp,
          counts: detected_counts,
          image_id: image_id
        }, ...prev.slice(0, 9)]); // Keep last 10 entries
      }
      
    } catch (error) {
      console.error("Error detecting waste:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "live") {
      intervalRef.current = setInterval(processFrame, 5000); // Process every 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeTab]);

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-green-500 text-white";
    if (score >= 60) return "bg-yellow-500 text-white";
    return "bg-red-500 text-white";
  };

  const getScoreGradient = (score) => {
    if (score >= 80) return "from-green-400 to-green-600";
    if (score >= 60) return "from-yellow-400 to-yellow-600";
    return "from-red-400 to-red-600";
  };

  const getScoreMessage = (score) => {
    if (score >= 80) return "Excellent! Area is clean.";
    if (score >= 60) return "Moderate. Some items need attention.";
    return "Poor. Immediate cleaning recommended.";
  };

  const getCountColor = (type) => {
    if (type === "recyclable") return "text-green-600";
    if (type === "non_recyclable") return "text-blue-600";
    return "text-red-600";
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case "recyclable":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case "non_recyclable":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        );
      case "hazardous":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const toggleFullscreen = () => {
    if (!camContainerRef.current) return;
    
    if (!isFullscreen) {
      if (camContainerRef.current.requestFullscreen) {
        camContainerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleManualCapture = () => {
    processFrame();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Waste Detection System</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Camera ID: {cameraId}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${loading ? 'bg-yellow-500' : 'bg-green-500'}`}>
              {loading ? 'Processing...' : 'Ready'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Navigation Tabs */}
      <div className="container mx-auto mt-4">
        <div className="flex border-b border-gray-200">
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'live' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-500'}`}
            onClick={() => setActiveTab('live')}
          >
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Live Detection</span>
            </div>
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'history' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-500'}`}
            onClick={() => {
              setActiveTab('history');
              fetchHistory();
            }}
          >
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Detection History</span>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6">
        {activeTab === 'live' ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Camera View */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-800">Real-time Waste Detection</h2>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={handleManualCapture}
                      className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                      disabled={loading}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                    <button 
                      onClick={toggleFullscreen}
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div 
                  ref={camContainerRef} 
                  className="relative flex justify-center p-4 bg-black"
                >
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                    </div>
                  )}
                  <Webcam
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className="max-h-[540px] w-auto object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Detected Items Display */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-500">
                  <div className="p-4 flex items-center space-x-2">
                    {getCategoryIcon("recyclable")}
                    <h3 className="font-bold text-gray-800">Recyclable Items</h3>
                  </div>
                  <div className="px-4 pb-4">
                    {detectedItems.recyclable.length > 0 ? (
                      <ul className="space-y-1">
                        {detectedItems.recyclable.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm py-1 border-b border-gray-100">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic text-sm">None detected</p>
                    )}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-500">
                  <div className="p-4 flex items-center space-x-2">
                    {getCategoryIcon("non_recyclable")}
                    <h3 className="font-bold text-gray-800">Non-Recyclable Items</h3>
                  </div>
                  <div className="px-4 pb-4">
                    {detectedItems.non_recyclable.length > 0 ? (
                      <ul className="space-y-1">
                        {detectedItems.non_recyclable.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm py-1 border-b border-gray-100">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic text-sm">None detected</p>
                    )}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-red-500">
                  <div className="p-4 flex items-center space-x-2">
                    {getCategoryIcon("hazardous")}
                    <h3 className="font-bold text-gray-800">Hazardous Items</h3>
                  </div>
                  <div className="px-4 pb-4">
                    {detectedItems.hazardous.length > 0 ? (
                      <ul className="space-y-1">
                        {detectedItems.hazardous.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm py-1 border-b border-gray-100">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic text-sm">None detected</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-6">
                <div className="p-4 bg-gray-100 border-b">
                  <h2 className="text-lg font-bold text-gray-800">Detection Console</h2>
                  <p className="text-xs text-gray-500">Last updated: {lastUpdated}</p>
                </div>
                
                {/* Current Score */}
                <div className="p-6">
                  <div className={`relative p-6 rounded-lg bg-gradient-to-r ${getScoreGradient(cleanlinessScore)} text-white`}>
                    <div className="absolute top-2 right-2 text-xs bg-white text-gray-800 px-2 py-1 rounded-full font-medium">
                      Real-time
                    </div>
                    <h3 className="text-lg font-bold text-center">Cleanliness Score</h3>
                    <p className="text-5xl font-bold text-center my-3">{cleanlinessScore.toFixed(1)}</p>
                    <p className="text-center mt-2 bg-black bg-opacity-20 py-1 px-2 rounded">
                      {getScoreMessage(cleanlinessScore)}
                    </p>
                  </div>

                  {/* Score History */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-gray-800">Detection History</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Last {scoreHistory.length} entries</span>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto pr-2 space-y-3">
                      {scoreHistory.length > 0 ? (
                        scoreHistory.map((entry, idx) => (
                          <div key={idx} className="bg-white rounded-lg border shadow-sm overflow-hidden">
                            <div className={`p-2 ${getScoreColor(entry.score)} flex justify-between items-center`}>
                              <span className="font-bold">{entry.score.toFixed(1)}</span>
                              <span className="text-xs">{entry.timestamp}</span>
                            </div>
                            <div className="p-3">
                              <div className="grid grid-cols-3 gap-2 text-center">
                                <div>
                                  <p className="text-xs text-gray-500">Recyclable</p>
                                  <p className={`font-bold ${getCountColor("recyclable")}`}>{entry.counts.recyclable}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Non-Recyclable</p>
                                  <p className={`font-bold ${getCountColor("non_recyclable")}`}>{entry.counts.non_recyclable}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Hazardous</p>
                                  <p className={`font-bold ${getCountColor("hazardous")}`}>{entry.counts.hazardous}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center p-8 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p>No detection history yet</p>
                          <p className="text-xs mt-2">Detection data will appear here</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Historical Detection Data</h2>
              <button 
                onClick={fetchHistory} 
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm flex items-center space-x-1"
                disabled={loading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh</span>
              </button>
            </div>
            
            <div className="p-6">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                </div>
              ) : (
                <>
                  {historyImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {historyImages.map((image, idx) => (
                        <div key={idx} className="bg-white rounded-lg border shadow-md overflow-hidden hover:shadow-lg transition">
                          <div className="relative">
                            <img 
                              src={`http://localhost:8000/image/${image.image_file_id}`} 
                              alt={`Detection ${idx}`} 
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-0 right-0 m-2">
                              <span className={`px-2 py-1 text-xs font-bold rounded ${getScoreColor(image.cleanliness_score)}`}>
                                {image.cleanliness_score.toFixed(1)}
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">Detection #{idx + 1}</h3>
                              <span className="text-xs text-gray-500">{image.timestamp}</span>
                            </div>
                            <div className="bg-gray-50 rounded p-2 grid grid-cols-3 gap-2 text-center text-sm">
                              <div>
                                <p className="text-xs text-gray-500">Recyclable</p>
                                <p className={`font-bold ${getCountColor("recyclable")}`}>{image.detected_counts.recyclable}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Non-Recyclable</p>
                                <p className={`font-bold ${getCountColor("non_recyclable")}`}>{image.detected_counts.non_recyclable}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Hazardous</p>
                                <p className={`font-bold ${getCountColor("hazardous")}`}>{image.detected_counts.hazardous}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-16 bg-gray-50 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-medium text-gray-600 mb-2">No Historical Data Available</h3>
                      <p className="text-gray-500 max-w-md mx-auto">Detection history will appear here once the system has processed and saved data from the camera.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center text-sm">
          <p>Waste Detection System v1.0 | &copy; 2025 Smart Waste Solutions</p>
        </div>
      </footer>
    </div>
  );
}

export default CameraDetail;