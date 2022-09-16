'use strict'

// const config = require('../config')

const mongoose = require('mongoose')
const { Test }  = require('../models/testehttpModule')



exports.post = async (req, res, next) => {
    var test = new Test(req.body)
        try{
            await test.save()
            res.status(200).send({
                message: "Success!"
            })
            
        }catch(e){
            console.log(e)
            res.status(500).send({
                message: "Falha ao salvar o registro"
            })
        }
}