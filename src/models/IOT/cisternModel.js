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
    lat:{
         type: String,
         required: false
        },
    lng:{
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

const Cistern = mongoose.model('Cistern', schema)
exports.Cistern = Cistern


