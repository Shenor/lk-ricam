const mongoose = require('mongoose');
require('dotenv').config({path: process.env.NODE_ENV === 'production' ? './.production.env' : './.env'});

const connectionString = () => {
    return process.env.NODE_ENV === 'production' 
    ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
}

const connectDB = async () => {
    console.log(connectionString())
    const conn = await mongoose.connect(connectionString(), {
        ssl: false,
        authSource: 'admin',
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`);
}

module.exports = connectDB;