'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { User }  = require('../models/user.js')


exports.print = async (req, res, next) => {
    console.log("Hello")

}

exports.post = async (req, res, next) => {
    console.log(req.body.email)
    var us = new User(req.body)
    
    try{
        await us.save()
        res.status(200).send({
            message: "Success!"
        })
        
    }catch(e){
        console.log(e)
        res.status(500).send({
            message: "usuário ja cadastrado"
        })
    }

}