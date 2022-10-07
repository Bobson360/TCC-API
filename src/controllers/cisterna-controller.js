'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { Cistern }  = require('../models/cisternModel.js')
const { Status }  = require('../models/statusModel.js')
const { User }  = require('../models/userModel.js')

exports.print = async (req, res, next) => {
    console.log("Hello")

}

exports.post = async (req, res, next) => {
    var cis = new Cistern(req.body)
    const c = await User.findOne({
        _id: req.body.userId
    })

    if(c){
        
        try{
            await cis.save()
            res.status(200).send({
                message: "Success!"
            })
            
        }catch(e){
            console.log(e)
            res.status(500).send({
                message: "Falha ao salvar o registro"
            })
        }
    }else{
        res.status(500).send({
            message: "ID inexistente ou invalido"
        })
    }
}

exports.get = async (req, res, next) => {
    res.status(200).send(await Cistern.find({}))
}
exports.getStatusCisterna = async (req, res, next) => {
    res.status(200).send(await Status.find({cisternaId: req.params.id}))
}
exports.getLastStatusCisterna = async (req, res, next) => {
    res.status(200).send(await Status.find({cisternaId: req.params.id}).sort({created_at: -1 }).limit(1) )
}
exports.setStatusCisterna = async (req, res, next) => {
    var cis = new Status(req.body)
    const c = await Cistern.findOne({
        _id: req.body.cisternaId
    })

    if(c){
        
        try{
            await cis.save()
            res.status(200).send({
                message: "Success!"
            })
            
        }catch(e){
            console.log(e)
            res.status(500).send({
                message: "Falha ao salvar o registro"
            })
        }
    }else{
        res.status(500).send({
            message: "ID inexistente ou invalido"
        })
    }
}