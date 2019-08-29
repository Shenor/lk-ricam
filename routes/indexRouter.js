const express = require('express');
const router = express.Router();
const Client = require('./../database');

router.get('/', (req, res) => {  
    if(!req.session.isAuthenticated) {
        res.redirect('/auth');
    } else {
        Client.find({}, (err, doc) => {
            if(err){throw err}
            res.render('index', doc[0]);
        });
    }        
});

module.exports = router;

