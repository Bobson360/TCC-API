'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: { unique: true }
    },
    adress: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        require: true,
        index: { unique: true }
    },
    vehicle: {
        type: String,
        required: true
    },
    licence: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: false,
        default: false
    },
    tag_id: {
        type: String,
        required: false,
        index: { unique: true }
    }
  
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })

const Supplier = mongoose.model('Supplier', schema)
exports.Supplier = Supplier


