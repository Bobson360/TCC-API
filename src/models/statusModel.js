'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    module_id: {
        type: String,
        required: true
    },
     nivel: {
        type: Number,
        required: true
    },
    abastecimento:{
        type: Number,
        default: 0,enum: [
            0, // modo consumo
            1, // modo abastecimento pluvial
            2, // modo abastecimento caminhão pipa
            3  // modo abastecimento outros
        ]
    }
   },  {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
      }
   })

const Status = mongoose.model('Status', schema)
exports.Status = Status


