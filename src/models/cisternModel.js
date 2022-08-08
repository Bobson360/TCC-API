'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user_id: {
        type: String,
        required: true
    },
     status: {
        type: Boolean,
        required: false,
        default: false
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
        created_at: 'created_at',
        updated_At: 'updated_at' 
      }
   })

const Cistern = mongoose.model('Cistern', schema)
exports.Cistern = Cistern


