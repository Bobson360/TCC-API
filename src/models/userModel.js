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
        type: Number,
        required: true,
        index: { unique: true }
    },
    level: {
        type: String,
        required: false,
        default: 'user',
        enum: ['usuario', 'fornecedor', 'admin', 'God'],
    }
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
   })

const User = mongoose.model('User', schema)
exports.User = User


