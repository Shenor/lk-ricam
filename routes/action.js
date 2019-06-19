const {Client, Equipment} = require('./../database');

module.exports.createClient = function (req, res) {

    req.on('data', (data) => {    
        let body = JSON.parse(data);

        const user = new Client({name, legalAdress, actualAdress, contractStatus, contact, connect} = body);
        const equip = new Equipment({fiscal, barcodeScanner, moneyBox, switchboard, monoBlock, printer, libra} = body);

        console.log(body);

        user.save().then().catch((e) => console.log(e));
        equip.save().then((equip) => {console.log(equip + 'Equip сработал');});
    });
};

module.exports.deleteClient = function (req, res) {

    req.on('data', (data) => {
        let body = JSON.parse(data);

        console.log(body.deleteName);
        
        Client.find({name: 'Шератон'}).then((data) => {console.log(data)});
        
        Client
            .find({name: body.deleteName})
            .remove().then(() => {console.log(`${body.deleteName} was Removed!`)});
    });
};

// module.exports = {
//     createClient: createClient,
//     deleteClient: deleteClient
// };