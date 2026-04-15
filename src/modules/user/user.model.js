const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", schema);
