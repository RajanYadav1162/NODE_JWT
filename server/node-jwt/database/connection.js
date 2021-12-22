const mongoose = require("mongoose");

const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI);
  } catch (err) {
    console.log("Error while connecting to database!");
  }
};

module.exports = connectDB;
