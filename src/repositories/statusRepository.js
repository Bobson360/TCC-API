'use strict'

const { Status }  = require('../models/statusModel')

exports.newCisternStatus = async ( datas ) => {

    try {
        const data = await Status( datas )
        data.save()
        return 200
    } catch (error) {
        return 500
    }
}

exports.getCisternStatus = async (  ) => {
    await Status.find()
}

