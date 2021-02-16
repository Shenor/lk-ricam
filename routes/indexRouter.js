const express = require('express');
const router = express.Router();
const Client = require('../src/models/client_model');
const auth = require('./../middleware/auth');

router.get('/', auth, async (req, res) => {
    const firstUser = await Client.findOne();
    res.redirect(`/users/${firstUser._id}`);   
});

module.exports = router;

