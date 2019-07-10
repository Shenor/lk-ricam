const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

    router.get('/', (req, res) => {  
           res.redirect('/user/0');
    });

module.exports = router;

