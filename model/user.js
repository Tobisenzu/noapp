const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  phoneno: { type: Number, default: null},
  linkdinId: { type: String, default: null},
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);