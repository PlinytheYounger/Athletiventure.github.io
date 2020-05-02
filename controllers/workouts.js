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
    res.render('Index');
})

//----------- Edit ----------- //
router.get('/:id/edit', (req, res) => {
    res.render('Edit');
})

//----------- NEW ----------- //
router.get('/:id', (req, res) => {
    res.render('Show');
})

//========================================================================================
// Functional Routes
// * Create: Creates a new resource POST
// * Destroy: Deletes a resource DELETE
// * Update: Updates a resource PUT
//========================================================================================

module.exports = router;