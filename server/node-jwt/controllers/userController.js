const User = require("../database/models/User");

const getAllUsers = async (req, res) => {
  try {
    const response = await User.find().exec();
    return res.json({ error: false, message: "List of Users", response });
  } catch (err) {
    return res.json({
      error: true,
      message: "Error while fetching all the users",
    });
  }
};

module.exports = getAllUsers;
