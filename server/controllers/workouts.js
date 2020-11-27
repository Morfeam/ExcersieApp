

//hello

const express = require('express');
const workouts = require('../models/workouts');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        workouts.getAllWorkouts().then(x=> res.send( x.map(workout=> ({ ...workout}) ) ) )
        .catch(next);
    })
    .get('/owner/:Owner_id', (req, res, next) => {
        const Owner_id = +req.params.Owner_id;
        workouts.getUserWorkouts(Owner_id).then(x=> res.send( x.map(workout=> ({ ...workout}) ) ) )
        .catch(next);
    })
    .get('/public/:PSetting', (req, res, next) => {
        const Setting = +req.params.PSetting;
        workouts.getPublicWorkouts(Setting).then(x=> res.send( x.map(workout=> ({ ...workout}) ) ) )
        .catch(next);
    })
    .get('/getwork/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        workouts.getWorkout(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        workouts.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/add', (req, res, next) => {
        workouts.addWorkout(
            req.body.Owner_id, 
            req.body.Privacy_Setting, 
            req.body.Time, 
            req.body.Exercise_Type, 
            req.body.Note, 
            req.body.Distance, 
            req.body.Other_Info,
        ).then(newWorkout => {
            res.send( newWorkout );
        }).catch(next)
    })
    .post('/update/:id', (req, res, next) => {
        const id = +req.params.id;
        workouts.updateWorkout(
            id,
            req.body.Privacy_Setting, 
            req.body.Other_Info,
        ).then(newWorkout => {
            res.send( newWorkout );
        }).catch(next)
    })
    .get('/delete/:id', (req, res, next) => {
        workouts.removeWorkout(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;
