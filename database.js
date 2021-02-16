const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const conn = await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        family: 4
    });

    console.log(`MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`);
}

module.exports = connectDB;