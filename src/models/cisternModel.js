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
    height:{
        type: Number,
        required: false
        },
    diameter:{
        type: Number,
        required: false
        },
    catchment_area:{
        type: Number,
        required: false
        },
    cistern_model:{
        type: String,
        required: false,
        default: 'Model_1',
        enum: ['Model_1', 'Model_2', 'Model_3', 'Model_4'],
        },
},  {
    timestamps: {
        created_at: 'created_at',
        updated_At: 'updated_at' 
      }
   })

const Cistern = mongoose.model('Cistern', schema)
exports.Cistern = Cistern


