const express = require('express');
const router = express.Router();
const Client = require('../src/models/client_model');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890abcdef', 5)

router.get('/all', async (req, res) => {
   const allUsers = await Client.find({}).sort('-name').select('name').lean();
   res.send(allUsers);
});

router.get('/create', async (req, res) => {
    const newUser = await new Client({name: `Новый ${nanoid()}`});
    await newUser.save();
    res.redirect(`/users/${newUser._id}`);
});

router.delete('/delete/:id', async (req, res) => {
    const _id = req.params.id;
    await Client.deleteOne({
        _id: _id
    });
    console.log(`Клиент ${_id} - был удален!`);
});

router.get('/:id', async (req, res) => { 
    const doc = await Client.findById(req.params.id);

    if (!doc){
       return res.status(404).render('404', {
            layout: 'error',
            title: "Страница не найдена"
        });
    }

    res.render('index', {doc});
});

router.get('/edit/:id', async (req, res) => {
    const _id = req.params.id;
    const editUser = await Client.findById({_id});
    
    if(!editUser){
        return res.status(404).render("404", {
            layout: "error",
            title: "Страница не найдена"
        });
    }

    res.render("edit", {
        layout: "edit",
        editUser
    });
});

router.post('/edit', async (req, res) => {
    await Client.replaceOne({_id: req.body.id}, req.body);
    const doc = await Client.findOne({_id: req.body.id}).select("_id");
    res.send(doc);
});

router.post('/edit/:id/avatar', async (req, res) => {
    console.log(req.body.id)
    const doc = await Client.findOne({_id: req.body.id});
    const toChange = {};

    if(req.file){  
       toChange.avatarUrl = `/${req.file.path}`;
    }
    
    Object.assign(doc, toChange);
    await doc.save();
    res.redirect(`/users/edit/${req.body.id}`);
});

module.exports = router;