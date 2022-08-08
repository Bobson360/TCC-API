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
        required: true
    }
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
   })

const User = mongoose.model('User', schema)
exports.User = User


