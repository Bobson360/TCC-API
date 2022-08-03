'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: { unique: true }
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    rules: [{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }]
})

const User = mongoose.model('user', schema)
exports.User = User


