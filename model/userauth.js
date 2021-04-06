const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserAuth = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UserAuth", UserAuth);