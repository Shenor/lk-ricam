const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.post('/createClient', (req, res) => {
    req.on('data', (data) => {    
        let body = JSON.parse(data);
        let {name} = body;
        
        global.lastUpdateName = name;

        const user = new Client({name, legalAdress, actualAdress, contractStatus, contact, connect, fiscal,
                                 barcodeScanner, moneyBox, switchboard, monoBlock, printer, libra} = body);

        console.log(body);

        user.save().then().catch((e) => console.log(e));
    });
    res.send({data: "Данные успешно добавлены !"});
});

module.exports = router;