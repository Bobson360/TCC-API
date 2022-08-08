'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    module_id: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true,
    },
    moisture: {
        type: Number,
        required: false,
    },
    temp: {
        type: Number,
        require: false
    },
    rfid: {
        type: String,
        require: false
    },
    its_rain: {
        type: Boolean,
        required: false
    }
  
},  {
    timestamps: {
        createdAt: 'created_at'
      }
   })

const Data = mongoose.model('Data', schema)
exports.Data = Data


