const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("SignUp", signUpSchema);
