const express = require('express');
const router = express.Router();
const Workout = require('../models/workouts.js');

//========================================================================================
// 7 RESTful Routes
// Presentational Routes (ALL GET REQUESTS)
// * Index: shows a list of our resources, links to New, Edit & Delete
// * New: Show a form to create a new resource linked to Create
// * Show: Shows one individual resource from our list
// * Edit: Shows a form to update an existing resource linked to Update Route
//========================================================================================

//----------- NEW ----------- //
router.get('/new', (req, res) => {
    res.render('New');
})

//----------- INDEX ----------- //
router.get('/', (req, res) => {
    Workout.find({}, (error, allWorkouts) => {    
        req.body.diffculty === 'Beginner' ? req.body.points = 10 : req.body.diffculty === 'Intermediate' ? req.body.points = 20 : req.body.diffculty === 'Advanced' ? req.body.points = 30 : req.body.diffculty === 'Extreme Advanced' ? req.body.points = 50 : req.body.points = 10;
        res.render('Index', {workouts: allWorkouts});
    })
})

// router.get('/seed', (req,res) => {
//     Workout.insertMany([
//         {
//             title: "Bodyweight Beginner Workout",
//             length: 30,
//             bodyFocus: ['Full Body'],
//             workoutType: ['Bodyweight'],
//             workout: ['2 Rounds', 'Walk into Plank x 6', 'Backward Lunge / Knee Up / Knee Out X 8/8', 'Doggie Leg Through X 8 alt. sides', 'Side Step Squat Pulse x 10 alt. sides', 'Hollow Leg Lifts x 15'],
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
//             workout: ['2 rounds: 45 secs work / 15 secs rest', 'Backward Lunge / Knee Strike / Jab - L', 'Backward Lunge / Knee Strike / Jab - R', 'Plank Side Jab (each arm)', 'Squat Knee Strike (x2) / Twist Squat (x2)', 'Side Kick / Knee Strike - L', 'Side Kick / Knee Strike - R', 'Squat / Jab / Jab', 'Squat Knee Strike (x2) / Twist Squat (x2)'],
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

//----------- Edit ----------- //
router.get('/:id/edit', (req, res) => {
    res.render('Edit');
})

//----------- SHOW ----------- //
router.get('/:id', (req, res) => {
    Workout.findById(req.params.id, (error, foundWorkout) => {
        res.render('Show', {workout: foundWorkout})
    })
})

//========================================================================================
// Functional Routes
// * Create: Creates a new resource POST
// * Destroy: Deletes a resource DELETE
// * Update: Updates a resource PUT
//========================================================================================

// Create
router.post('/', (req,res) => {
    req.body.diffculty === 'Beginner' ? req.body.points = 10 : req.body.diffculty === 'Intermediate' ? req.body.points = 20 : req.body.diffculty === 'Advanced' ? req.body.points = 30 : req.body.diffculty === 'Extreme Advanced' ? req.body.points = 50 : req.body.points = 10;
    Workout.create(req.body, (error, createdWorkout) => {
        res.redirect('/')
    })
})



module.exports = router;