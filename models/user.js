const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  password: { type: String },
  email: { type: String, lowercase: true, index: true},
  authorization: { type: Number, required: true, default: 1 },
  provider: { type: String, required: true },
  createDate: { type: Date, default: Date.now }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;
