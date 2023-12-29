const catchAsyncError = require("./CatchAsyncErrors");
const ErrorHandler = require("./ErrorHandler");
const jwt = require("jsonwebtoken");
const db = require("../db");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login to access this resource!", 401));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return next(new ErrorHandler(err, 400));
    req.user = user;
    next();
  });
});

exports.isAuthorizedRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.account_type)) {
      return next(
        new ErrorHandler("Invalid role! " + req.user.account_type, 405)
      );
    }
    next();
  };
};
