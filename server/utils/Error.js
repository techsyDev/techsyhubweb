const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Cast ErrorHandler
  if (err.name === "CastError") {
    message = "Resource not found, Invalid " + err.path;
    err = new ErrorHandler(message, 400);
  }
  // Mongoose double key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered!`;
    err = new ErrorHandler(message, 400);
  }
  // Wrong JWT token
  if (err.code === "JsonWebTokenError") {
    const message = "Json Web Token is invalid, try again!";
    err = new ErrorHandler(message, 400);
  }
  // Expire JWT token
  if (err.code === "TokenExpiredError") {
    const message = "Json Web Token is expired, try again!";
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    error: err.message,
  });
};
