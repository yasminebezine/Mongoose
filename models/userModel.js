const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "You must type the name"],
  },

  userAge: {
    type: Number,
    required: [true, "You must type the birth date"],
  },

  userFavoritefood: {
    type: String,
    required: [true, "You must type the favorite food "],
  },
});
module.exports.UserSchema = mongoose.model('UserCollection', UserSchema)