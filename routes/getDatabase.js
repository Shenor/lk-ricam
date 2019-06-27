const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.all('/database', (req, res) => {
    Client.find({}, (err, docs) => {   
        res.send(docs);
    });
});


module.exports = router;