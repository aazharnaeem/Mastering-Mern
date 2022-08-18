const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const morgan = require('morgan');
const mongoSanatize = require('express-mongo-sanitize');
const { auth, user } = require('./routes');


const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanatize());
app.use(morgan('combined'));

app.use('/auth', auth);
app.use('/user', user);

module.exports = app