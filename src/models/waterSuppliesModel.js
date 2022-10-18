'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    text: {
        type: String,
        required: true
    },
     type: {
        type: Number,
        required: true,
        index: { unique: true }
    }
   },  {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
      }
   })

const waterSupplies = mongoose.model('waterSupplies', schema)
exports.waterSupplies = waterSupplies


