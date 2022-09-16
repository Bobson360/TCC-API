'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    temperatura: {
        type: Number,
        required: true
    },
    humidade: {
        type: Number,
        required: true,
    }
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
   })

const Test = mongoose.model('TestModuleEsp32Http', schema)
exports.Test = Test


