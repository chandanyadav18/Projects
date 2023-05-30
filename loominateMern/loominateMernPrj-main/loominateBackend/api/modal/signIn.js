const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("SignIn", signInSchema);
