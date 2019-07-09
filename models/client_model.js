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
    dateEndFn: Date,
    contact: {
        type: [[String]]
    },
    connect: {
        type: [[String]]
    },
    fiscal: {
        type: [Object]
    },
    barcodeScanner: {
        type: [Object]
    },
    moneyBox: {
        type: [Object]
    },
    switchboard: {
        type: [Object]
    },
    monoBlock: {
        type: [Object]
    },
    printer: {
        type: [Object]
    },
    libra: {
        type: [Object]
    }
});

mongoose.model('clients', ClientSchema);