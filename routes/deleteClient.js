const express = require('express');
const router = express.Router();

const Client = require('./../database');

router.post('/', (req, res) => {

    const {data} = req.body;

    data.map(c => {
        Client.deleteOne({name: c}, (err) => {
            if (err) throw err;
        }).then(()=>{console.log(`${c} - был удален!`)});
    });
  
});

module.exports = router;