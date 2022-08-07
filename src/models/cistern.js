'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
        type: String,
        required: true
    },
     status: {
        type: Boolean,
        required: true
    },
    geo_location:{
         type: String,
         required: false
        },
    module_id: {
            type: String,
            required: false
     }
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })

const cistern = mongoose.model('cistern', schema)
exports.Cistern = cistern

