const JWT = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies["x-auth-token"]
    if (!token) return res.json({error: true, message: "No jwt token found!"})

    try {
        await JWT.verify(token, "Secret")
    } catch (err) {
        return res.json({error: true, message: "Invalid jwt token"})
    }
    next();
};

module.exports = {isAuthenticated};
