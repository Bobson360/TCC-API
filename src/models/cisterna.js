'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
        type: String,
        required: true
    },
     status: {
        type: Boolean,
        required: true
    },
     latitude:{
         type: String,
         required: false
        },
        longitude:{
            type: String,
            required: false
     }
})

const Cisterna = mongoose.model('cisterna', schema)
exports.Cisterna = Cisterna


