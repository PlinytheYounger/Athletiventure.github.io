//---------------------------------
// DEPENDENCIES
//---------------------------------
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const workoutController = require('./controllers/workouts.js');

// Variables
const app = express();
const port = 3000;

//---------------------------------
// MIDDLEWARE
//---------------------------------
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use('/workouts', workoutController);

//---------------------------------
// CONNECT TO MONGO
//---------------------------------
mongoose.connect('mongodb://localhost:27017/workouts', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, ()=> {
    console.log('listening on port: ', port);
})