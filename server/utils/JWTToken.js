const jwt = require("jsonwebtoken");

// Creating token and saving in cookie
const getJWTToken = function (_id) {
  return jwt.sign({ id: _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = getJWTToken(user._id);
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    user,
    token,
  });
};

module.exports = sendToken;
