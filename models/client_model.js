const {Schema, model} = require('mongoose');

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
    },
    fiscal: {
        type: [Object]
    },
    ofd: {
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

ClientSchema.methods.saveClient = function(body) {
    new ClientSchema(body);
    return this.save();
}

model('Client', ClientSchema);