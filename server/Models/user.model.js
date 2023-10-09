const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    requird: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = {UserModel};
