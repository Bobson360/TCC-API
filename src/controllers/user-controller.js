'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { User }  = require('../models/user.js')


exports.print = async (req, res, next) => {
    console.log("Hello")

}

exports.post = async (req, res, next) => {
    console.log("HEllo")
    var us = new User(req.body)
    us.save()
    res.status(200).send({
        message: "Success!"
    })

}