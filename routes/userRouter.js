const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Client.find({}, (err, docs) => {
        res.status(200).render('index', docs[id])
    });
});

module.exports = router;

