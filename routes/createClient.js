const express = require('express');
const router = express.Router();

const Client = require('../database');
const auth = require('../middleware/shildRoutes');

function makeCounter() {
    let currentCount = 1;
  
    return function() {
      return currentCount++;
    };
}
const counter = makeCounter();

router.get('/', auth, async (req, res) =>{
    const doc = new Client({name: `Новый ${counter()}`}); 
    await doc.save();
    res.redirect(`/user/${doc._id}`);
});


module.exports = router;