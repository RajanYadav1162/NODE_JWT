const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: [6, "Email need to be minimum of length 6 but got only {VALUE}"],
    max: 30,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, "Password need to be minimum of length 6 but got only {VALUE}"],
    max: 50,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
