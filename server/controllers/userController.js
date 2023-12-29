const db = require("../db");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/CatchAsyncErrors");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/SendEmail");
const sendToken = require("../utils/JWTToken");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

exports.registerUser = (req, res, next) => {
  const { email, password, full_name } = req.body;

  const query =
    "INSERT INTO techsyhub.users (`_id`,`email`, `password`, `full_name`) VALUES (?, ?, ?, ?)";
  const query2 = "SELECT * FROM techsyhub.users WHERE email = ?";

  const _id = uuidv4();

  db.query(query2, [email], (err, result) => {
    if (err) return next(new ErrorHandler(err, 400));
    if (result.length > 0)
      return next(new ErrorHandler("User already exists!", 400));
    if (result.length === 0) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      db.query(
        query,
        [_id, email, hashedPassword, full_name],
        (err, result) => {
          if (err) return next(new ErrorHandler(err, 400));
          const data = {
            email,
            message: `This is a verification email for your account ${email}, click this link: http://localhost:3000/api/verification?_id=${_id}`,
            subject: "Verification Email",
          };
          sendEmail(data);
          res.status(200).json("User Created!");
        }
      );
    }
  });
};

exports.emailVerification = (req, res, next) => {
  const { _id } = req.query;

  const query = "SELECT * FROM techsyhub.users WHERE _id = ?";
  db.query(query, [_id], (err, result) => {
    if (err) return next(new ErrorHandler(err, 400));
    if (result.length === 0) {
      res.status(404).send("User does not exist!");
      return next(new ErrorHandler("User does not exists!", 400));
    }
    if (result.length > 0) {
      const query2 =
        "UPDATE techsyhub.users SET is_email_verified = 1 WHERE _id = ?";
      db.query(query2, [_id], (err, result) => {
        if (err) return next(new ErrorHandler(err, 400));
        res.status(200).send("Email Verified!");
      });
    }
  });
};

exports.sendLoginOTP = (req, res, next) => {
  const { email } = req.body;
  const query = "SELECT * FROM techsyhub.users WHERE email = ?";
  db.query(query, [email], (err, result) => {
    if (err) return next(new ErrorHandler(err, 400));
    if (result.length === 0) {
      return next(new ErrorHandler("User does not exists!", 400));
    }
    const otp = String(Math.floor(Math.random() * 90000) + 10000);
    const encryptedOTP = bcrypt.hashSync(otp, 10);
    const now = new Date();
    const options = {
      expires: now.setMinutes(now.getMinutes + 5),
      httpOnly: true,
    };
    const emailOptions = {
      email: email,
      subject: "Login OTP",
      message: `This is your OTP for login session: ${otp}`,
    };
    sendEmail(emailOptions);
    res.status(200).cookie("otp", encryptedOTP, options).send("OTP Sent!");
  });
};

exports.verifyLoginOTP = (req, res, next) => {
  const { otp, email, password } = req.body;
  const encryptedOTP = req.cookies.otp;
  const isVerified = bcrypt.compare(otp, encryptedOTP);
  if (!isVerified) {
    return next(new ErrorHandler("OTP is not verified", 400));
  }
  const query = "SELECT * FROM techsyhub.users WHERE email = ?";
  db.query(query, [email], (err, result) => {
    if (err) return next(new ErrorHandler(err, 400));
    if (result.length === 0) {
      return next(new ErrorHandler("User does not exists!", 400));
    }
    const isPasswordChecked = bcrypt.compare(password, result[0].password);
    if (!isPasswordChecked) {
      return next(new ErrorHandler("Invalid email or password!", 401));
    }

    sendToken(result[0], 200, res);
  });
};

exports.getUser = (req, res, next) => {
  const query = "SELECT * FROM techsyhub.users WHERE _id = ?";
  console.log(req.user);
  db.query(query, [req.user.id], (err, result) => {
    if (err) return next(new ErrorHandler(err, 400));
    if (result.length === 0) {
      return next(new ErrorHandler("User does not exists!", 404));
    }
    res.status(200).json({ user: result[0] });
  });
};

exports.forgetPassword = (req, res, next) => {
  const { email } = req.body;
  const query = "SELECT * FROM techsyhub.users WHERE email = ?";
  db.query(query, [email], (err, result) => {
    if (err) return next(new ErrorHandler(err, 400));
    if (result.length === 0) {
      return next(new ErrorHandler("User does not exists!", 400));
    }
    // Generate a JWT token with the user's email
    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    // Send a password reset email with the token
    const resetLink = `http://localhost:3000/auth?route=reset+password&token=${token}`;
    const emailOptions = {
      email: email,
      subject: "Reset Password",
      message: `Click this link to reset your password: <a href="${resetLink}">${resetLink}</a>`,
    };
    sendEmail(emailOptions);
    const query2 =
      "UPDATE techsyhub.users SET reset_password_token = ? WHERE email = ?";
    db.query(query2, [token, email], (err, result) => {
      if (err) return next(new ErrorHandler(err, 400));
    });
    res.status(200).send("Password reset email Sent!");
  });
};

exports.resetPassword = (req, res, next) => {
  const { password } = req.body;
  const { token } = req.params;
  const query = "SELECT * FROM techsyhub.users WHERE reset_password_token = ?";
  db.query(query, [token], (err, result) => {
    if (err) return next(new ErrorHandler(err, 400));
    if (result.length === 0) {
      return next(new ErrorHandler("User does not exists!", 400));
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query2 =
      "UPDATE techsyhub.users SET reset_password_token = ? WHERE email = ?";
    db.query(query2, ["", result[0].email], (err, result) => {
      if (err) return next(new ErrorHandler(err, 400));
    });
    const query3 = "UPDATE techsyhub.users SET password = ? WHERE email = ?";
    db.query(query3, [hashedPassword, result[0].email], (err, result) => {
      if (err) return next(new ErrorHandler(err, 400));
    });
    res.status(200).send("Password has been reset!");
  });
};
