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
    comments: Array,
    createdBy: String
}, {timestamps: true});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;


// router.get('/seed', (req,res) => {
//     Workout.insertMany([
//         {
//             title: "Bodyweight Beginner Workout",
//             length: 30,
//             bodyFocus: ['Full Body'],
//             workoutType: ['Bodyweight'],
//             workout: [
//                 {
//                     exercise: 'Walk into Plank',
//                     sets: 2,
//                     reps: 6,
//                     rest: 0
//                 }, 
//                 {
//                     exercise: 'Backward Lunge / Knee Up / Knee Out X 8/8',
//                     sets: 2,
//                     reps: '8 each side',
//                     rest: 0
//                 },
//                 {
//                     exercise: 'Doggie Leg Through X 8 alt. sides',
//                     sets: 2,
//                     reps: '8 alternating sides',
//                     rest: 0
//                 },
//                 {
//                     exercise: 'Side Step Squat Pulse',
//                     sets: 2,
//                     reps: '10 alternating sides',
//                     rest: 0 
//                 },
//                 {
//                     exercise: 'Hollow Leg Lifts',
//                     sets: 2,
//                     reps: 15,
//                     rest: 0
//                 }],
//             difficulty: 'Beginner',
//             points: 0,
//             timesCompleted: 0,
//             comments: '',
//             createdBy: ''
//         },
//         {
//             title: 'Cardio Kickbox Beginner',
//             length: 16,
//             bodyFocus: ['Upper Body', 'Lower Body'],
//             workoutType: ['Cardio'],
//             workout: [
//                 {
//                     exercise: 'Backward Lunge / Knee Strike / Jab - L',
//                     sets: 2,
//                     reps: '45 secs work',
//                     rest: '15 secs'
//                 },
//                 {
//                     exercise: 'Backward Lunge / Knee Strike / Jab - R',
//                     sets: 2,
//                     reps: '45 secs work',
//                     rest: '15 secs'
//                 },
//                 {
//                     exercise: 'Plank Side Jab (alt arms)',
//                     sets: 2,
//                     reps: '45 secs work',
//                     rest: '15 secs'
//                 }, 
//                 {
//                     exercise: 'Squat Knee Strike (x2) / Twist Squat (x2)',
//                     sets: 2,
//                     reps: '45 secs work',
//                     rest: '15 secs'
//                 },
//                 {
//                     exercise: 'Side Kick / Knee Strike - L',
//                     sets: 2,
//                     reps: '45 secs work',
//                     rest: '15 secs'
//                  }, 
//                  {
//                      exercise: 'Side Kick / Knee Strike - R',
//                      sets: 2,
//                      reps: '45 secs work',
//                      rest: '15 secs'
//                  }, 
//                  {
//                     exercise: 'Squat / Jab / Jab',
//                     sets: 2,
//                     reps: '45 secs work',
//                     rest: '15 secs'
//                  },
//                  {
//                     exercise: 'Squat Knee Strike (x2) / Twist Squat (x2)',
//                     sets: 2,
//                     reps: '45 secs work',
//                     rest: '15 secs'
//                  }],
//             difficulty: 'Beginner',
//             points: 0,
//             timesCompleted: 0,
//             comments: '',
//             createdBy: ''
//         },
//         {
//             title: 'Lower Body at Home',
//             length: 45,
//             bodyFocus: 'Lower Body',
//             workoutType: 'Weightlifting',
//             workout: [
//                 {
//                     exercise: 'Deadlifts',
//                     sets: 4,
//                     reps: 12,
//                     rest: '30 - 60 secs'
//                 },
//                 {
//                     exercise: 'Dumbbell Bulgarian Squats',
//                     sets: 4,
//                     reps: '15 each leg',
//                     rest: '30 - 60 secs'
//                 },
//                 {
//                     exercise: 'Dumbbell Curtsy Lunges',
//                     sets: 4,
//                     reps: '15 each leg',
//                     rest: '30 - 60 secs'
//                 },
//                 {
//                     exercise: 'Glutes Bridges',
//                     sets: 4,
//                     reps: 20,
//                     rest: '30 - 60 secs'
//                 },
//                 {
//                     exercise: 'Dumbbell Donkey Kick',
//                     sets: 4,
//                     reps: '15 each leg',
//                     rest: '30 - 60 secs'
//                 },
//                 {
//                     exercise: 'Single Leg Bridge Lifts',
//                     sets: 4,
//                     reps: '15 each leg',
//                     rest: '30 - 60 secs'
//                 },
//                 {
//                     exercise: 'Dumbbell Stiff Leg Deadlift',
//                     sets: 4,
//                     reps: 15,
//                     rest: '30 - 60 secs'
//                 }
//             ],
//             difficulty: 'Intermediate',
//             points: 0,
//             timesCompleted: 0,
//             comments: '',
//             createdBy: ''
//         }
//     ], (error, data) => {
//         res.redirect('/');
//     })
// });