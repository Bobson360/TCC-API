'use strict'

const { waterSupplies }  = require('../models/waterSuppliesModel')

exports.getAllWaterSuppliesTypes = async ( req, res, nex ) => {
    const data = await waterSupplies.find()
    console.log(data)
    return data
}

exports.getWaterSuppliesTypes = async(id) => {
    return await waterSupplies.findOne(id)
}

exports.newWaterSuppliesTypes = async ( body ) => {
    try {
        var water_supplies = waterSupplies( body )
        await water_supplies.save()
        return {Msg: "Salvo com sucesso"} 
    } catch (error) {
        return error
    }
}