const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {  
    if(!req.session.isAuthenticated) {
        res.redirect('/auth');
    } else {
        res.redirect('/user/0');
    }        
});

module.exports = router;

