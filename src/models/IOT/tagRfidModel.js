"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    tag_id: {
        type: String,
        required: true,
        default: "tag123"
      },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const TagRFID = mongoose.model("TagRFID", schema);
exports.TagRFID = TagRFID;
