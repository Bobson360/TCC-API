'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const index = require('./routes/')


const app = express();
const router = express.Router();

const mongoose = require('mongoose')

const userRoute = require('./routes/user')
const cisternaRoute = require('./routes/cisterna')
mongoose.connect(config.connectionString)

const cistern = require('./models/userModel')
const dataModule = require('./models/userModel')
const moduleModel = require('./models/userModel')
const serviceModule = require('./models/userModel')
const statusModule = require('./models/userModel')
const suplierModule = require('./models/userModel')
const UserModule = require('./models/userModel')
const TestModuleEsp32Http = require('./models/testehttpModule')


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
app.use('/cisterna', cisternaRoute)

module.exports = app