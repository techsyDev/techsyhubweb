const express = require("express");
// Router
const router = express.Router();

// Controllers
const {
  registerUser,
  emailVerification,
  verifyLoginOTP,
  getUser,
  sendLoginOTP,
  forgetPassword,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../utils/Auth");

router.post("/register", registerUser);
router.get("/verification", emailVerification);
router.post("/otp", sendLoginOTP);
router.post("/login", verifyLoginOTP);
router.get("/user", isAuthenticatedUser, getUser);
router.put("/password", forgetPassword);

module.exports = router;
