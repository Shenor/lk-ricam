const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.post('/deleteClient', (req, res) => {
    req.on('data', (data) => {
        let body = JSON.parse(data);
        const {deleteName} = body;

    Client.deleteOne({name: deleteName}).then(()=>{console.log("Removed!!!")});
    
    });
});
module.exports = router;