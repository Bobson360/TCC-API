'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cistern_id: {
        type: String,
        required: true
    },
    suplier_id: {
        type: String,
        required: true,
        trim: true,
        
    },
    scheduled_to: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
        default: 'manhã',
        enum: ['manhã', 'tarde'],
    },
    volume: {
        type: Number,
        require: false,
        default: 5000
    },
    status: {
        type: String,
        required: false,
        default: 'agendado',
        enum: ['agendado', 'cancelado', 'reagendado', 'entregue'],
    },
    comments: {
        type: String,
        required: false
    }
  
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })

const Service = mongoose.model('Service', schema)
exports.Service = Service


