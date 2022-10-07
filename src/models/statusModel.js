'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cisternaId: {
        type: String,
        required: true
    },
     nivel: {
        type: Number,
        required: true
    },
    temperatura:{
        type: Number
    },
    umidade:{
        type: Number
    }
   },  {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
      }
   })

const Status = mongoose.model('Status', schema)
exports.Status = Status


