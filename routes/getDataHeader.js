const express = require('express');
const router = express.Router();

const {Client} = require('../database');

router.all('/', (req, res) => {
    req.on('data', (data) => {
        let id = data.toString('utf-8');

        console.log(id);

        Client.find({}, function (err, docs){
            if (err) throw err;
            res.render('index.hbs', docs[id])
        });
    });
   
});


module.exports = router;