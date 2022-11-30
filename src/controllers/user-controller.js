'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { User }  = require('../models/userModel.js')
const { Cistern }  = require('../models/IOT/cisternModel')
const { getCisternByUser, deleteCisterByUserIdRepository } = require('../repositories/cisternRepository')


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
exports.delete = async (req, res, next) => {
    console.log({_id: req.params.id})
    try {
        const deleteUser = await User.findByIdAndRemove({_id: req.params.id})
        const deleteCistern = await deleteCisterByUserIdRepository(req.params.id)
        if(deleteUser && deleteCistern)
            return res.status(200).send({message: `usuário ${deleteUser.name} excluido com sucesso` })
        throw {Error: {
            message: "Falha ao excluir registro"}
        }
    } catch (error) {
        res.status(404).send(error)
    }
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