const mongoose = require('mongoose');

require('./public/schema/client_model');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clients', {useNewUrlParser: true})
    .then(console.log('MongoDB has started ...'))
    .catch((e) => console.log(e));

const Client = mongoose.model('clients');


module.exports = Client;