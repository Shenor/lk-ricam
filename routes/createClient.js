const express = require('express');
const router = express.Router();

const Client = require('../database');

router.post('/', async (req, res) => {
        const {name} = req.body;
        const candidate = await Client.findOne({name});
        
        if(!candidate) {
            const user = new Client(req.body); 
            await user.save().catch((err) => console.log(err));
            const count = await Client.find().estimatedDocumentCount();
            console.log(count);
            res.send({data: count - 1});
        } else { 
           res.send({error: "Такой пользователь уже есть"});
        }
});

module.exports = router;