const express = require('express');
const router = express.Router();

const {Client} = require('../database');

router.all('/dataHeader', (req, res) => {
    req.on('data', (data) => {
        let id = data.toString('utf-8');

        console.log(id);

        Client.find({}, function (err, docs){
            res.render('index.hbs', docs[id])
        });
    });
   
});


module.exports = router;