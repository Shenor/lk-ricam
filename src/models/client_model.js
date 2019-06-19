const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    legalAdress: String,
    actualAdress: String,
    contractStatus: String,
    contact: {
        type: [[String]]
    },
    connect: {
        type: [[String]]
    }
});

mongoose.model('clients', ClientSchema);