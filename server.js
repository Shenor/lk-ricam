const express = require('express');
const morgan = require('morgan');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');
const MongoStore = require('connect-mongodb-session')(session);

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const getDatabaseRouter = require('./routes/getDatabase');
const createClientRouter = require('./routes/createClient');
const deleteClientRouter = require('./routes/deleteClient');
const editClientRouter = require('./routes/editClient');
const headersRouter = require('./routes/headers');
const authRouter = require('./routes/auth');

const errorHandler = require('./middleware/error');
const varMiddleware = require('./middleware/variables'); 
const fileMiddleware = require('./middleware/file');

const app  = express();

app.set('views', (__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', expressHbs(
    {
        layoutsDir: "views/layouts",
        partialsDir: "views/partials",
        defaultLayout: "main",
        helpers: require('./utils/hbs-helpers'),
        extname: "hbs"
    }
));

const store = new MongoStore({
    collection: 'sessions',
    uri: 'mongodb://127.0.0.1:27017/clients'
});

app.use(morgan('dev'));
app.use((express.static(__dirname + '/public')));
app.use('/images', (express.static(__dirname + '/images')));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'some secrect string',
    resave: false,
    saveUninitialized: false,
    store
}));
app.use(helmet());
app.use(compression());
app.use(varMiddleware);
app.use(fileMiddleware.single('avatar'));

app.use(headersRouter);
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/database', getDatabaseRouter);
app.use('/create', createClientRouter);
app.use('/delete', deleteClientRouter);
app.use('/edit', editClientRouter);

app.use(errorHandler);

app.listen(3000, () => console.log('Server running ...'));
