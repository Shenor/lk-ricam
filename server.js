const express = require('express');
const morgan = require('morgan');
const expressHbs = require('express-handlebars');
const session = require('express-session');

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const getDatabaseRouter = require('./routes/getDatabase');
const createClientRouter = require('./routes/createClient');
const deleteClientRouter = require('./routes/deleteClient');
const editClientRouter = require('./routes/editClient');
const getDataHeaderRouter = require('./routes/getDataHeader');
const headersRouter = require('./routes/headers');
const authRouter = require('./routes/auth');

const varMiddleware = require('./middleware/variables'); 

const app  = express();

app.set('views', (__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', expressHbs(
    {
        layoutsDir: "views/layouts",
        partialsDir: "views/partials",
        defaultLayout: "main",
        extname: "hbs"
    }
));

app.use(morgan('dev'));
app.use((express.static(__dirname + '/public')));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'some secrect string',
    resave: false,
    saveUninitialized: false
}));
app.use(varMiddleware);

app.use(headersRouter);
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/database', getDatabaseRouter);
app.use('/dataHeader', getDataHeaderRouter);
app.use('/createClient', createClientRouter);
app.use('/deleteClient', deleteClientRouter);
app.use('/editClient', editClientRouter);


app.listen(3000, () => console.log('Server running ...'));