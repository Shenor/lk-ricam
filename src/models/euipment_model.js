const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
    name: String,
    fiscal: {
        type: [[Object]]
    },
    barcodeScanner: {
        type: [[Object]]
    },
    moneyBox: {
        type: [[Object]]
    },
    switchboard: {
        type: [[Object]]
    },
    monoBlock: {
        type: [[Object]]
    },
    printer: {
        type: [[Object]]
    },
    libra: {
        type: [[Object]]
    }
});

mongoose.model('equipment', EquipmentSchema);