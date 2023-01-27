const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  channel: {
    type: String,
  },
  likes: {
    type: String,
  },
  song: {
    type: String,
  },
  shares: {
    type: String,
  },
  message: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
