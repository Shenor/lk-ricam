const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.post('/', (req, res) => {
    req.on('data', (data) => {
        let body = JSON.parse(data);
        const {deleteName} = body;
    
    global.lastUpdateName = null;

    Client.deleteOne({name: deleteName}, (err) => {
        if (err) throw err;
    }).then(()=>{console.log("Removed!!!")});
    
    });
});
module.exports = router;