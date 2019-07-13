const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  authorization: { type: Number, required: true, default: 0 },
  provider: { type: String, required: true },
  createDate: { type: Date, default: Date.now }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;
