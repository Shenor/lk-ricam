const express = require('express');
const router = express.Router();

const Client = require('../database');
const auth = require('../middleware/shildRoutes');

function makeCounter() {
    var currentCount = 1;
  
    return function() {
      return currentCount++;
    };
}
const counter = makeCounter();

router.get('/', auth, async (req, res) =>{

    const user = new Client({name: `Новый ${counter()}`}); 
    await user.save();
    const count = await Client.find().estimatedDocumentCount();
    res.redirect(`/user/${count - 1}`)

});


module.exports = router;