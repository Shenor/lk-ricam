const Client = require('./../database');

require('./../database');

module.exports.createClient = function (req, res) {

    req.on('data', (data) => {
        let body = JSON.parse(data);

        console.log(body);

        const user = new Client(body);

        user.save();
    });
};

module.exports.deleteClient = function (req, res) {

    req.on('data', (data) => {
        let body = JSON.parse(data);

        console.log(body.deleteName);
        
        Client.find({name: 'Шератон'}).then((data) => {console.log(data)});
        
        Client
            .find({name: body.deleteName})
            .remove().then(() => {console.log("Removed!")});
    });
};

// module.exports = {
//     createClient: createClient,
//     deleteClient: deleteClient
// };