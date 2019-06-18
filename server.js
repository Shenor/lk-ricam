const express = require('express');
const morgan = require('morgan');

const Client = require('./database');
const action = require('./routes/action');

const app  = express();

app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use((express.static(__dirname + '/public')));

app.get('/', (req, res) => {
    Client.find({}, (err, docs) => {
        res.render('index', docs[0]);
    });
});

app.post('/database', (req, res) => {
    Client.find({}, (err, docs) => {   
        res.send(docs);
    });
});

app.get('/database', (req, res) => {
    Client.find({}, (err, docs) => {   
        res.send(docs);
    });
});

app.post('/createClient', (req, res) => {
    action.createClient(req, res);
    res.send("Данные успешно добавлены");
});

app.post('/deleteClient', (req, res) => {
   action.deleteClient(req, res);
   res.send("Данные успешно удалены");
});

app.listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));