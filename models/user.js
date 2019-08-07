require('dotenv').config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const encrypt = require('mongoose-encryption')


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] } );

const User = mongoose.model("User", userSchema);

module.exports = User;
