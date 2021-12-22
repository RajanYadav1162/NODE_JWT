const express = require("express");
const Router = express.Router();

const getAllUsers = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

Router.get("/", isAuthenticated, getAllUsers);

module.exports = Router;
