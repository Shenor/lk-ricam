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

    const doc = new Client({name: `Новый ${counter()}`}); 
    await doc.save();
    const all = await Client.find({});
    all.forEach((c, idx) => {
       if(c.name === doc.name){
         res.redirect(`/user/${idx}`);
       } else {
        return false;
       }
    });
});


module.exports = router;