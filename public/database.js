const mongoose = require('mongoose');

require('./models/client_model');

mongoose.Promise = global.Promise;

const options = {
    useNewUrlParser: true,
    family: 4
};

mongoose.connect('mongodb://127.0.0.1:27017/clients', options)
    .then(console.log('MongoDB has started ...'))
    .catch((e) => console.log(e));

const client = mongoose.model('Client');

module.exports = client;