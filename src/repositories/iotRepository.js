'use strict'

const { Device }  = require('../models/IOT/deviceModel')
const { TagRFID }  = require('../models/IOT/tagRfidModel')
const { Service }  = require('../models/serviceModel')

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
    console.log("Repository")
    console.log(req.body)
    var tag = TagRFID(req.body)
    console.log(tag)
   return await tag.save()
}

exports.checkLinkToSupplier = async ( ) => {
    
}

exports.getDevice = async ( id ) => {
    return await Device.findOne( id )
}

exports.getAllDevices = async ( req, res, next ) => {
    return await Device.find()
}

exports.registerDevice = async ( body ) => {
    try {
        return await Device( body ).save()
    } catch (error) {
        return error
    }
}