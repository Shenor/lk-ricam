const express = require('express');
const router = express.Router();

const Client = require('./../database');

router.post('/', (req, res) => {
        const {name} = req.body;

        global.lastUpdateName = name;

    Client.replaceOne({name: name}, req.body).then(()=>{console.log("Edited!!!")}).catch((err) => console.log(err));
    
});
module.exports = router;