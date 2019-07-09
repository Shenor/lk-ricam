const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

    router.get('/', (req, res) => {

        if(global.lastUpdateName){
            Client.find({name: global.lastUpdateName}, (err, docs) => {
                res.status(200).render('index', docs[0])
            });
        } else {
            Client.find({}, (err, docs) => {
                res.status(200).render('index', docs[0])
            });
        }
        

    });

module.exports = router;

