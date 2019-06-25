const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

    router.get('/', (req, res) => {
       
        Client.find({}, function (err, docs){
            res.render('index.hbs', docs[0])
        });
    });

module.exports = router;

