"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    device_id: {
      type: String,
      required: true,
      index: { unique: true }
    },
    type: {
      type: String,
      required: false,
      default: "endpoint",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Device = mongoose.model("Device", schema);
exports.Device = Device;
