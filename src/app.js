'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express();
// const mongoose = require('mongoose')
// const config = require('./config')


// mongoose.connect(config.connectionString)

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

app.get('/', (req, res) => {
    res.send('Hello Cistech!')
})
app.get('/test', (req, res) => {
    res.send('Hello Cistech! This is snother route-2')
})

module.exports = app