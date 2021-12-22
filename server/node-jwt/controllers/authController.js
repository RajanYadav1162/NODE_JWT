const User = require("../database/models/User");
const joi = require("../validators/joiSchema");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  //validate email and password we can use joi
  try {
    await joi.validateAsync({ email, password });
  } catch (err) {
    return res.json({
      error: true,
      message: err.details[0].message,
    });
  }
  //check whether a user exist with that email if exist then return
  const user = await User.findOne({ email }).exec();
  if (user) {
    return res.json({ error: true, message: "User already exist" });
  }
  //hash the password
  // todo
  //store email and hashed password in db

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ email, password: hashedPassword });
  try {
    const response = await newUser.save();
    return res.json({
      error: false,
      message: "Signup successfully ! login to continue.",
      response,
    });
  } catch (error) {
    res.json({ error: true, message: "Error while adding user to database" });
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  //validate email and password we can use joi
  try {
    await joi.validateAsync({ email, password });
  } catch (err) {
    return res.json({
      error: true,
      message: err.details[0].message,
    });
  }
  //check whether a user exist with that email if exist then return
  const user = await User.findOne({ email }).exec();
  if (!user) {
    return res.json({ error: true, message: "User does not exist" });
  }

  //matching the hashed password with normal password
  const { password: hashedPassword } = user;
  const isMatched = await bcrypt.compare(password, hashedPassword);
  if (!isMatched)
    return res.json({ error: true, message: "Incorrect Password" });

  //prettier-ignore
  const token = JWT.sign({email}, "Secret", {expiresIn: "1d"});
  //now we need to set this token to client side
  res.cookie('x-auth-token', token, {
    httpOnly: false,
    maxAge: 360000,
  });
  res.json({ error: false, message: "successfully login", token });
};
module.exports = { signUpUser, signInUser };
