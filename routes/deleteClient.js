const express = require('express');
const router = express.Router();

const Client = require('./../database');

router.post('/', (req, res) => {
    const {deleteName} = req.body;

    Client.deleteOne({name: deleteName}, (err) => {
        if (err) throw err;
    }).then(()=>{console.log("Removed!!!")});
    
});
module.exports = router;