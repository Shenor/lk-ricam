const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.post('/', (req, res) => {
    req.on('data', (data) => {
        let body = JSON.parse(data);
        const {name} = body;

        global.lastUpdateName = name;
        console.log(body);

    Client.replaceOne({name: name}, body).then(()=>{console.log("Edited!!!")}).catch((err) => console.log(err));
    
    });
});
module.exports = router;