'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { Cistern }  = require('../../models/IOT/cisternModel.js')
const { Status }  = require('../../models/statusModel.js')
const { User }  = require('../../models/userModel.js')

const waterSuppliesType = require('../../repositories/waterSuppliesType')
const cisRepo = require('../../repositories/cisternRepository') // Cistern Ropository
const statusRepository = require('../../repositories/statusRepository')

exports.print = async (req, res, next) => {
    console.log("Hello")

}

exports.post = async (req, res, next) => {
    var cis = new Cistern(req.body)
    console.log(req.body.userId)
    const c  = await User.findOne({
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
                error: e
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

exports.put = async (req, res, next) => {
    console.log(req.body)
    res.status(200).send(await cisRepo.updateCistern(req.body))
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
    const data = {
        module_id: req.query.module_id,
        nivel: req.query.nivel,
        abastecimento: req.query.abastecimento,
    }
    const d = await statusRepository.newCisternStatus( data )
        res.status(d).send()
}

exports.getAllWaterSuppliesTypes = async ( req, res, nex ) => {
    const data = await waterSuppliesType.getAllWaterSuppliesTypes()
    res.status(200).send(data)
}
exports.getWaterSuppliesTypes = async ( req, res, nex ) => {
    res.status(200).send(`Hello ${req.params.id}`)
    
}
exports.newWaterSuppliesTypes = async ( req, res, nex ) => {
    try {
        var a = waterSuppliesType.newWaterSuppliesTypes( req.body )
        res.status(200).send(a)
        
    } catch (error) {
        res.status(500).send({Error: error})
    }
    
}

exports.newScheduling = async ( req, res, nex ) => {
    try {
        var a = cisRepo.newSchedulingRepository( req.body )
        res.status(200).send(a)
        
    } catch (error) {
        res.status(500).send({Error: error})
    }
}

exports.getCisternByUserController = async ( req, res, nex ) => {

    console.log(req.body.user)
    try {
        var a = await cisRepo.getCisternByUser( req.body.user )
        res.status(200).send(a)
        
    } catch (error) {
        res.status(500).send({Error: error})
    }
}

exports.getCisternaWithClientDatasController = async ( req, res, nex ) => {
    try {
        var a = await cisRepo.getCisternaWithClientDatasController(  )
        setTimeout(() => {
            
            console.log(a)
            res.status(200).send(a)
        }, 100);
        
    } catch (error) {
        res.status(500).send({Error: error})
    }
}

exports.getSchedulesController = async ( req, res, nex ) => {
    try {
        var a = await cisRepo.getSchedulesRepository(  )
        setTimeout(() => {
            res.status(200).send(a)
        }, 500);
        
    } catch (error) {
        res.status(500).send({Error: error})
    }
}
exports.deleteSchedulesController = async ( req, res, nex ) => {
    try {
        var a = await cisRepo.deleteSchedulesController( req.params.id )
        setTimeout(() => {
            res.status(200).send(a? {message: "Registro excluido com sucesso"} : {message: 'Erro ao excluir o registro. Verifique os dados e tente novamente'})
        }, 500);
        
    } catch (error) {
        res.status(500).send({Error: error})
    }
}