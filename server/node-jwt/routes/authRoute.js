const express = require("express");
const { signUpUser, signInUser} = require("../controllers/authController");

const Router = express.Router();

Router.post("/signup", signUpUser);
Router.post("/signin", signInUser)
module.exports = Router;
