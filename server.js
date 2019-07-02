const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');

const indexRouter = require('./routes/indexRouter');
const getDatabaseRouter = require('./routes/getDatabase');
const createClientRouter = require('./routes/createClient');
const deleteClientRouter = require('./routes/deleteClient');
const editClientRouter = require('./routes/editClient');
const getDataHeaderRouter = require('./routes/getDataHeader');
const headersRouter = require('./routes/headers');

const app  = express();

app.set('views', (__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(morgan('dev'));
app.use((express.static(__dirname + '/public')));

app.use(headersRouter);
app.use('/', indexRouter);

app.all('/database', getDatabaseRouter);
app.all('/dataHeader', getDataHeaderRouter);
app.post('/createClient', createClientRouter);
app.post('/deleteClient', deleteClientRouter);
app.post('/editClient', editClientRouter);


app.listen(3000, () => console.log('Server running at http://192.168.1.25:3000/'));