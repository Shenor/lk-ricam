const express = require('express');
const router = express.Router();

const Client = require('./../database');

router.get('/:id', async (req, res) => {
    const doc = await Client.findById({_id: req.params.id});
    res.render('edit', {
        layout: 'edit',
        doc
    }); 
});

router.post('/', async (req, res) => {
    await Client.replaceOne({_id: req.body.id}, req.body);
    const all = await Client.find({});
    const doc = await Client.findOne({_id: req.body.id});
    all.forEach((c, idx) => {
       if(c.name === doc.name){
         res.send({idx});
       } else {
        return false;
       }
    });
});

router.post('/avatar', async (req, res) => {
    const doc = await Client.findOne({_id: req.body.id});
    const toChange = {};

    if(req.file){  
       toChange.avatarUrl = req.file.path;
    }
    Object.assign(doc, toChange);
    await doc.save();
    res.redirect(`/edit/${req.body.id}`);
});

module.exports = router;