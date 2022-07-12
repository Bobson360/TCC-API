'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const index = require('./routes/')
const userRoute = require('./routes/user')
const app = express();
const router = express.Router();

const mongoose = require('mongoose')

mongoose.connect(config.connectionString)

const User = require('./models/user')


app.use(bodyParser.json({ //define um limite para a requisão em JSON
    limit: '5mb'
}))

app.use(bodyParser.urlencoded({
    extended: false
}))

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})


app.use('/', index)
app.use('/user', userRoute)

module.exports = app