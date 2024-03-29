'use strict'

// const config = require('../config')

const repository = require('../repositories/supplier-repository')


exports.getAllSuppliers = async (req, res, next) => {
    try{
        
        res.status(200).send(
           await repository.findAll()
        )
        
    }catch(e){
        console.log(e)
        res.status(500).send({
            message: "Erro ao cadastrar fornecedor"
        })
    }
}

exports.newSupplier = async (req, res, next) => {    
    try{
        await repository.create(req.body)
        res.status(200).send({
            message: "Cadastrado com successo!"
        })
        
    }catch(e){
        console.log(e)
        res.status(500).send({
            message: "Erro ao cadastrar fornecedor"
        })
    }
}

exports.getSupplier = async (req, res, next) => {
    try{
        await repository.find(req.params.id)
        res.status(200).send({
            message: "excluido com successo!"
        })
    }catch(e){
        res.status(500).send({
            message: "Erro ao excluir fornecedor"
        })
    }
}

exports.deleteSupplier = async (req, res, next) => {
    console.log(`deletando o fornecedor: ${req.params.id}`)
    try{
        await repository.delete(req.params.id)
        res.status(200).send({
            message: "excluido com successo!"
        })
        
    }catch(e){
        console.log(e)
        res.status(500).send({
            message: "Erro ao cadastrar fornecedor"
        })
    }
}

/**
 * 
 * implementar lógica para fornecedor disponivel
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getSupplierFree = async (req, res, next) => {
    res.status(200).send(await repository.findAllFree(req.body))
}

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

exports.get = async (req, res, next) => {
    res.status(200).send(await User.find({}))
}