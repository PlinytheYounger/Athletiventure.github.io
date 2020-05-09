const express = require('express');
const router = express.Router();
const Workout = require('../models/workouts.js');
// const User = require('../models/users.js');

//========================================================================================
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
        const {search_field, search_value} = req.query;

        console.log(req.query);

        if (error) {
            res.send(error)
        } else {
            res.render('Index', {workouts: allWorkouts});
        }
    })
})

//----------- USER PROFILE ----------- //
router.get('/user', (req,res) => {
    res.render('Profile');
})

//----------- Edit ----------- //
router.get('/:id/edit', (req, res) => {
    Workout.findById(req.params.id, (error, editWorkout) => {
        if (error) {
            res.send(error);
        } else {
            res.render('Edit', {workout: editWorkout})
        }
    })
})

//----------- SHOW ----------- //
router.get('/:id', (req, res) => {
    Workout.findById(req.params.id, (error, foundWorkout) => {
        if (error) {
            res.send(error);
        } else {
            res.render('Show', {workout: foundWorkout})
        }
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
    if (req.body.diffculty === 'Beginner') {
        req.body.points = 10
    } else if (req.body.diffculty === 'Intermediate') {
        req.body.points = 20 
    } else if (req.body.diffculty === 'Advanced') {
        req.body.points = 30
    } else if (req.body.diffculty === 'Extreme Advanced') {
        req.body.points = 50
    } else {
        req.body.points = 10;
    } 
    // const workouts
    const workout = [
        {
            exercise: req.body.exercise1Exercise,
            sets: req.body.exercise1Sets,
            reps: req.body.exercise1Reps,
            rest: req.body.exercise1Rest
        },
        {
            exercise: req.body.exercise2Exercise,
            sets: req.body.exercise2Sets,
            reps: req.body.exercise2Reps,
            rest: req.body.exercise2Rest
        },
        {
            exercise: req.body.exercise3Exercise,
            sets: req.body.exercise3Sets,
            reps: req.body.exercise3Reps,
            rest: req.body.exercise3Rest
        },
    ]
    req.body.workout = workout;
    console.log(req.body);
    Workout.create(req.body, (error, createdWorkout) => {
        if (error) {
            res.send(error);
        } else {
            res.redirect('/workouts')
        }
    })
})

// Destroy 
router.delete('/:id', (req, res) => {
    Workout.findByIdAndDelete(req.params.id, (error, deletedWorkout) => {
        console.log('workout deleted');
        res.redirect('/workouts');
    })
})

// Update
router.put('/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body, (error, updatedWorkout) => {
        error ? console.log(error) : res.redirect('/workouts')
    })
})



module.exports = router;