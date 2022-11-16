
const mongoose = require('mongoose')
const { Supplier }  = require('../models/supplierModel')

exports.create = async (data) => {
    var sup = new Supplier(data)
    return await sup.save() 
}

exports.findAll = async ( ) => {
    var sups =  await Supplier.find({})
    console.log(sups)
    return sups
}