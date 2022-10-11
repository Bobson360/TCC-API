'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { Cistern }  = require('../../models/IOT/cisternModel.js')
const { Status }  = require('../../models/statusModel.js')
const { User }  = require('../../models/userModel.js')
const { Device }  = require('../../models/IOT/deviceModel')

const cisRepo = require('../../repositories/cisternRepository') // Cistern Ropository

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

exports.getCisternIdByDeviceId = async (req, res, next) => {
    cisRepo.getCisternIdByDeviceId(red)
    res.status(200).send('Hello')
}

exports.getStatusCisterna = async (req, res, next) => {
    res.status(200).send(await Status.find({cisternaId: req.params.id}))
}
exports.getLastStatusCisterna = async (req, res, next) => {
    res.status(200).send(await Status.find({cisternaId: req.params.id}).sort({created_at: -1 }).limit(1) )
}
/**
 * 
 * Recebe os dados via GET/query
 * atraves do id do device recebido em module_id
 * consulta em qual cisterna este modulo possui cadastro
 * atribui o id da cisterna ao corpo e salva o status
 * 
 */
exports.setStatusCisternaByGateWay = async (req, res, next) => {
    console.log(req.query)
    var cis = new Status(req.params)
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