const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title: {type: String, required: true},
    link: String,
    length: {type: Number, required: true},
    bodyFocus: {type: Array, required: true},
    workoutType: {type: Array, required: true},
    workout: {type: Array, required: true},
    difficulty: {type: String, required: true},
    points: Number,
    timesCompleted: Number,
    comments: String,
    createdBy: String
}, {timestamps: true});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;