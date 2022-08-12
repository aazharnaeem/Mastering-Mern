const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')
dotenv.config({
    path: path.resolve(__dirname, './.env')
})

const Mongo_key = process.env.Mongo_key;
mongoose.connect(`${Mongo_key}`, { useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;

module.exports = connection