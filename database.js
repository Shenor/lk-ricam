const mongoose = require('mongoose');

require('./src/models/client_model');
require('./src/models/euipment_model');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clients', {useNewUrlParser: true})
    .then(console.log('MongoDB has started ...'))
    .catch((e) => console.log(e));

const Client = mongoose.model('clients');
const Equipment = mongoose.model('equipment');

module.exports = {Client, Equipment};