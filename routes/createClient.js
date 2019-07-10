const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.post('/', (req, res) => {
    req.on('data', (data) => {           
        const user = new Client(JSON.parse(data)); 
        
        user.save().catch((err) => console.log(err));
    });

    Client.find({}, (err, data) => {
        res.send({data: data.length});
    });
    
});

module.exports = router;