const express = require('express');
const morgan = require('morgan');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');
const MongoStore = require('connect-mongodb-session')(session);

const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/users');
const reportRouter = require('./routes/reportClient');
const authRouter = require('./routes/auth');

const headers = require('./middleware/headers');
const errorHandler = require('./middleware/error');
const varMiddleware = require('./middleware/variables'); 
const fileMiddleware = require('./middleware/file');
const auth = require("./middleware/auth");

const connectDB = require('./database');
const app  = express();
require('dotenv').config();

app.set('views', (__dirname, 'src/views'));
app.set('view engine', 'hbs');
app.engine('hbs', expressHbs({
    layoutsDir: "src/views/layouts",
    partialsDir: "src/views/partials",
    defaultLayout: "main",
    helpers: require('./utils/hbs-helpers'),
    extname: "hbs"
}));

const store = new MongoStore({
    collection: 'sessions',
    uri: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
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
app.use(headers);
app.use(varMiddleware);
app.use(fileMiddleware.single('avatar'));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', auth, usersRouter);
app.use('/report', reportRouter);

app.use(errorHandler);

connectDB();

app.listen(3000, () => console.log(`Server running http://localhost:3000`));

