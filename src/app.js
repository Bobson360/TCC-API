'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const index = require('./routes/')


const app = express();
const router = express.Router();

const mongoose = require('mongoose')
mongoose.connect(config.connectionString)



/********************************************************
 *                                                      *
 *                         ROUTES                       *
 *                                                      *
 ********************************************************/
const userRoute = require('./routes/user')
const cisternaRoute = require('./routes/cisterna')
const adminRoute = require('./routes/adminRoutes')
const iotRoute = require('./routes/iot')
const suplierRoute = require('./routes/suplierRoute')



/********************************************************
 *                                                      *
 *                   MODELS REGISTER                    *
 *                                                      *
 ********************************************************/
const cistern = require('./models/userModel')
const dataModule = require('./models/userModel')
const moduleModel = require('./models/userModel')
const serviceModule = require('./models/userModel')
const statusModule = require('./models/userModel')
const supplierModule = require('./models/supplierModel')
const UserModule = require('./models/userModel')
const AdmnModel = require('./models/adminModel')
const Abastecimento = require('./models/waterSuppliesModel')


/********************************************************
 *                                                      *
 *                      DISABLE CORS                    *
 *                                                      *
 ********************************************************/
const cors = require('cors'); //5.2k (gzipped: 2.1k)
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}


app.use(bodyParser.json({ //define um limite para a requisão em JSON
    limit: '5mb'
}))

app.use(bodyParser.urlencoded({
    extended: false
}))


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
app.use('/supplier', suplierRoute)

module.exports = app