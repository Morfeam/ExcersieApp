

//hello

const express = require('express');
const follow = require('../models/followers');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        follow.getAllFollows().then(x=> res.send( x.map(follows=> ({ ...follows}) ) ) )
        .catch(next);
    })
    .get('/follower/:Follower_id', (req, res, next) => {
        const follower_id = +req.params.Follower_id;
        follow.getFollowers(follower_id).then(x=> res.send( x.map(follower=> ({ ...follower}) ) ) )
        .catch(next);
    })
    .get('/following/:Following_id', (req, res, next) => {
        const following_id = +req.params.Following_id;
        follow.getFollowing(following_id).then(x=> res.send( x.map(following=> ({ ...following}) ) ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        follow.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/add', (req, res, next) => {
        follow.addFollow(
            req.body.Following_id,
            req.body.Follower_id, 
            req.body.Is_Accepted, 
        ).then(newFollow => {
            res.send( newFollow );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        follow.updateFollow( 
            req.params.id,
            req.body.Following_id,
            req.body.Follower_id, 
            req.body.Is_Accepted, 
        ).then(newFollow => {
            res.send( newFollow );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        follow.removeFollow(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;
