const express = require('express');
const router = express.Router();

const {Client} = require('./../database');

router.post('/', (req, res) => {
    req.on('data', (data) => {    
        let body = JSON.parse(data);

        let {name} = body;
        global.lastUpdateName = name;

        const user = new Client(body);


        user.save().then().catch((err) => console.log(err));
    });
    res.send({data: "Данные успешно добавлены !"});
});

module.exports = router;