const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    score: { type: Number, required: true },
    date: { type: Date, required: true }
});

const Score = mongoose.model('Score', ScoreSchema);
module.exports = Score;
