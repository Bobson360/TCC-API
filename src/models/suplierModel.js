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
        type: Boolean,
        required: true,
        default: true,
    },
    cpf: {
        type: String,
        require: true
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
        required: false
    }
  
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })

const Suplier = mongoose.model('Suplier', schema)
exports.Suplier = Suplier


