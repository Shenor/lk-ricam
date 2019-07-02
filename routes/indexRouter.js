const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

    router.get('/', (req, res) => {

        Client.find({name: global.lastUpdateName}, (err, docs) => {
            res.status(200).render('index.hbs', docs[0])
        });
    });

module.exports = router;

