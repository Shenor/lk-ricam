const express = require('express');
const router = express.Router();

const Client = require('./../database');

router.all('/', (req, res) => {
    Client.find({}, (err, docs) => {   
        if (err) throw err;
        res.send(docs);
    });
});


module.exports = router;