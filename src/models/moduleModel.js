'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })

const module   = mongoose.model('module', schema)
exports.Module = module
