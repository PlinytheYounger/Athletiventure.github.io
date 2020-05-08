const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    completedWorkouts: Array,
    points: Number,
    level: Number,
    weight: Number,
    goal: String,

});

const User = mongoose.model('Workout', userSchema);

module.exports = User;