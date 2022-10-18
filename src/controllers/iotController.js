'use strict'

const iotRepository  = require('../repositories/iotRepository')


exports.getTagRfid = async (req, res, next) => {
    // res.status(200).send(await iotRepository.checkTagRFID(req.query.tag_rfid))
    if(req.query.tag_rfid  == 'AC EE 32 4A' | req.query.tag_rfid  == 'ACEE324A' ) {
        res.status(200).send()
    }
    res.status(404).send()
}

exports.getAllTagsRfid = async (req, res, next) => {
    res.status(200).send(await iotRepository.getAllTagsRfid())
}

exports.newTagRFID = async ( req, res, next ) => {
    console.log(req.body)
    let msg = iotRepository.newTagRFID( req )
    res.status(200).send(msg)
}

exports.getDevice = async ( req, res, next ) => {
    const response = await iotRepository.getDevice( req.params.id )
    res.status(200).send( response )
}

exports.getAllDevices = async ( req, res, next ) => {
    
}

exports.registerDevice = async ( req, res, next ) => {
    const response = await iotRepository.registerDevice( req.body )
    res.status(200).send( response )
}
