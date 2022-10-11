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
const adminRoute = require('./routes/adminRoutes')
const iotRoute = require('./routes/iot')
mongoose.connect(config.connectionString)

const cistern = require('./models/userModel')
const dataModule = require('./models/userModel')
const moduleModel = require('./models/userModel')
const serviceModule = require('./models/userModel')
const statusModule = require('./models/userModel')
const suplierModule = require('./models/userModel')
const UserModule = require('./models/userModel')
const AdmnModel = require('./models/adminModel')

const cors = require('cors'); //5.2k (gzipped: 2.1k)


app.use(bodyParser.json({ //define um limite para a requisão em JSON
    limit: '5mb'
}))

app.use(bodyParser.urlencoded({
    extended: false
}))

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
// Habilita o CORS
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     next();
// })


app.use('/', index)
app.use('/admin', adminRoute)
app.use('/iot', iotRoute)
app.use('/user', userRoute)
app.use('/cisterna', cisternaRoute)

module.exports = app