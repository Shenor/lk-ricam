const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.post('/editClient', (req, res) => {
    req.on('data', (data) => {
        let body = JSON.parse(data);
        const {name} = body;

        global.lastUpdateName = name;

    Client.replaceOne({name: name}, body).then(()=>{console.log("Edited!!!")});
    res.send({data: "Данные успешно обновлены !"});
    });
});
module.exports = router;