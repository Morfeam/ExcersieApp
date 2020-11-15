

//hello

const express = require('express');
const comments = require('../models/comments');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        comments.getAllComments().then(x=> res.send( x.map(comment=> ({ ...comment}) ) ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        comments.getComment(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:Workout_id', (req, res, next) => {
        const Workout_id = +req.params.Workout_id;
        if(!Workout_id) return next();
        comments.getCommentsonWorkoutId(Workout_id).then(x=> res.send( x.map(comment=> ({ ...comment}) ) ) )
        .catch(next);
    })
    .get('/:Owner_id', (req, res, next) => {
        const Owner_id = +req.params.Owner_id;
        if(!Owner_id) return next();
        comments.getCommentsonWorkoutId(Owner_id).then(x=> res.send( x.map(comment=> ({ ...comment}) ) ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        comments.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        comments.add(
            req.body.Text,
            req.body.Workout_id,
            req.body.Owner_id 
        ).then(newComment => {
            res.send( newComment );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        comments.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;

