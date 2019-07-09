const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
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
app.use('/user', userRouter);
app.use('/database', getDatabaseRouter);
app.use('/dataHeader', getDataHeaderRouter);
app.use('/createClient', createClientRouter);
app.use('/deleteClient', deleteClientRouter);
app.use('/editClient', editClientRouter);


app.listen(3000, () => console.log('Server running ...'));