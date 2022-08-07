'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    module_id: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true,
    },
    moisture: {
        type: Number,
        required: true,
    },
    temp: {
        type: Number,
        require: true
    },
    rfid: {
        type: String,
        require: true
    },
    its_rain: {
        type: Boolean,
        required: false
    }
  
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })

const User = mongoose.model('user', schema)
exports.User = User


