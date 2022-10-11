'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    isVerified:{
        type: Boolean,
        required: false
    }
},  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
   })
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         index: { unique: true }
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// },  {
//     timestamps: {
//         createdAt: 'created_at',
//         updatedAt: 'updated_at' 
//       }
//    })

const admin = mongoose.model('admin', schema)
exports.Admin = admin