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
        index: { unique: true }
    },
    scheduled_to: {
        type: Date,
        required: true,
        default: true,
    },
    volume: {
        type: Number,
        require: true
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

const User = mongoose.model('user', schema)
exports.User = User


