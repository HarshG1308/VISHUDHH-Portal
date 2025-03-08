const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require("mongoose");
const User = require("./models/user");
const axios = require("axios");
const Score = require("./models/Score");

const app = express();

// More permissive CORS (for development)
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // form data

// Detailed logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

// Routes
const emailRoutes = require('./routes/email');
app.use('/api/email', emailRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));
  

app.get("/api/scores", async (req, res) => {
    try {
        const scores = await Score.find().sort({ date: 1 }); // Sort by date ascending
        res.json(scores);
    } catch (error) {
        console.error("Error fetching scores:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});







// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));