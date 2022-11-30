const mongoose = require("mongoose");

const { User } = require('../models/userModel')

exports.findById = async (id) => {
    return await User.findById(id)
}

exports.findNameById = async (id) => {
    const user = await User.findById(id)
    return user.name
}