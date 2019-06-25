const express = require('express');
const morgan = require('morgan');

const indexRouter = require('./routes/indexRouter');
const getDatabase = require('./routes/getDatabase');
const createClient = require('./routes/createClient');
const deleteClient = require('./routes/deleteClient');
const getDataHeader = require('./routes/getDataHeader');
const headers = require('./routes/headers');

const app  = express();

app.set('views', (__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use((express.static(__dirname + '/public')));

app.use(headers);
app.use('/', indexRouter);

app.all('/database', getDatabase);
app.all('/dataHeader', getDataHeader);
app.post('/createClient', createClient);
app.post('/deleteClient', deleteClient);


app.listen(3000, () => console.log('Server running at http://192.168.1.25:3000/'));