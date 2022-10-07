'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })

const Module   = mongoose.model('Module', schema)
exports.Module = Module
