'use strict'

const { Cistern }  = require('../models/IOT/cisternModel.js')

exports.getCisternIdByDeviceId = async (req, res, next) => {
    console.log(req.boby.module_id)
   return await Cistern.find(req.boby.module_id)
}