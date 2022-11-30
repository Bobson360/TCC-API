'use strict'

const { Cistern } = require('../models/IOT/cisternModel')
const { Device }  = require('../models/IOT/deviceModel')
const { TagRFID }  = require('../models/IOT/tagRfidModel')

/**
 *      Verifica se a tag está cadastrada
 */

exports.checkTagRFID = async (data) => {

    console.log(data)
    const tag = await TagRFID.findOne({
        tag_id: data
    })
    console.log(tag)
    return tag
}

exports.getAllTagsRfid = async ( ) => {
    return TagRFID.find()
}

exports.getCisternIdByDeviceId = async (req, res, next) => {
    console.log(req.boby.module_id)
   return await Cistern.find(req.boby.module_id)
}

exports.newTagRFID = async ( req ) => {
    var tag = TagRFID(req.body)
    console.log(tag)
   return await tag.save()
}

exports.checkLinkToSupplier = async ( ) => {
    
}

exports.getDevice = async ( id ) => {
    return await Device.findById( id )
}

exports.getAllDevices = async ( req, res, next ) => {
    return await Device.find()
}

exports.getDeviceCode = async ( id ) => {
    const device = await Device.findById( id )
    return device.device_id
}

exports.getAllDevicesFree = async ( req, res, next ) => {
    const devices = await Device.find()
    const cisterns = await Cistern.find()

    const devicesInCistern = new Set(cisterns.map( el => el.module_id ))
    const devicesFree = devices.filter(el => !devicesInCistern.has(el.id) && el.type != "Gateway")
    return devicesFree 
}

exports.registerDevice = async ( body ) => {
    try {
        return await Device( body ).save()
    } catch (error) {
        return error
    }
}

exports.deleteDevice = async ( id ) => {
    console.log(id)
    try {
        return Device.findByIdAndDelete(id)
    } catch (error) {
        return error
    }
}