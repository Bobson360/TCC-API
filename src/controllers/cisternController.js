'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { Cistern }  = require('../models/cisternModel.js')
const { Data }  = require('../models/dataModel.js')
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
    console.log('get all cisterns')
    let cisternResults = await Cistern.find({})
    res.status(200).send({
        "total of cistens": cisternResults.length,
        cisterns: cisternResults
    })
}
exports.getCisterna = async (req, res, next) => {
    res.status(200).send(await Data.find({cisternaId: req.params.id}))
}
exports.getLastStatusCisterna = async (req, res, next) => {
    res.status(200).send(await Data.find({cisternaId: req.params.id}).sort({created_at: -1 }).limit(1) )
}
exports.setStatus = async (req, res, next) => {
    var data = new Data(req.body)
    const c = await Cistern.findOne({
        module_id: req.body.module_id
    })

    // add module validation

    if(c){
        
        try{
            await data.save()
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