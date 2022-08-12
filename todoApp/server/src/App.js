const express = require('express');
const cors = require('cors');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongooseSanitize = require('express-mongo-sanitize');

const { authRouter, userRoutes } = require('./routes')
const app = express();

app.use(express.json());
app.use(cors());
app.use(xss());
app.use(helmet());
app.use(mongooseSanitize());
app.use('/auth', authRouter);
app.use('/user', userRoutes);


module.exports = app