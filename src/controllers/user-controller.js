'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { User }  = require('../models/userModel.js')
const { getCisternByUser } = require('../repositories/cisternRepository')


exports.print = async (req, res, next) => {
    console.log("Hello")

}

exports.post = async (req, res, next) => {
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

exports.getAll = async (req, res, next) => {
    res.status(200).send(await User.find({}))
}

exports.get = async (req, res, next) => {
    res.status(200).send(await User.findOne({_id: req.params.id}))
}

exports.getUserWithCisternsId = async (req, res, next) => {
    let userWithCisternId = []
    const user = await User.find({})
    user.forEach( async (e) =>  {
        var cis = await getCisternByUser(e._id)
        if(cis)
            userWithCisternId.push({...e._doc, cisternId: cis._id})
    });
    
    setTimeout(() => {
        res.status(200).send(userWithCisternId)
    }, 3500);
}