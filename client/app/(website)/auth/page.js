"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import contactbg from "@/assets/contactbg.jpg";
import Image from "next/image";
import techsyhub from "@/assets/logo.svg";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import validator from "validator";
import axios from "axios";
import { useRouter } from "next/navigation";
import OTPInput, { ResendOTP } from "otp-input-react";

const Auth = () => {
  const router = useSearchParams();
  const route = router.get("route");
  return (
    <Box
      className="w-full min-h-screen bg-cover bg-center bg-fixed bg-no-repeat flex justify-center items-center"
      sx={{ backgroundImage: `url(${contactbg.src})` }}
    >
      <Box className="w-[90%] h-4/5 contact-bg">
        {route === "forgot password" ? (
          <ForgotPassword />
        ) : route === "sign up" ? (
          <SignUp />
        ) : route === "reset password" ? (
          <ResetPassword />
        ) : (
          <SignIn />
        )}
      </Box>
    </Box>
  );
};

export default Auth;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // OTP Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!email || !password) {
      return toast.error("Email & Password is required!");
    }
    if (validator.isEmail(email) === false) {
      toast.error("Invalid Email!");
      return;
    }
    axios({
      method: "POST",
      data: {
        email,
      },
      withCredentials: true,
      url: "http://localhost:3000/api/otp",
    })
      .then(() => setOpen(true))
      .catch((err) => console.log(err));
  };
  const handleClose = () => setOpen(false);
  const [OTP, setOTP] = useState("");

  const loginUser = () => {
    axios({
      method: "POST",
      data: {
        email,
        password,
        otp: OTP,
      },
      withCredentials: true,
      url: "http://localhost:3000/api/login",
    })
      .then((res) => {
        toast.success("Logged In Successfully !");
        console.log(res);
        setOpen(false);
      })
      .catch((err) => console.log(err));
  };
  // const getUser = () => {
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:3000/api/user",
  //   })
  //     .then((res) => console.log(res.data.user))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <Box className="w-full h-full p-[8%]">
      <Image src={techsyhub} alt="logo" className="h-14 w-auto" />
      <Typography className="spinnaker text-8xl mt-5 text-white">
        Sign In
      </Typography>
      <Typography className="inter w-2/4 text-xl mt-5 text-white">
        "Lorem ipsum dolor sit amet, consectetur aeiusmod tempor incididunt ut
        labore et dolore magna .
      </Typography>
      <Box className="flex flex-col items-end mt-14 w-[35%]">
        <input
          type="email"
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Please Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Please Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          href={{ pathname: "/auth", query: { route: "sign up" } }}
          className="text-white text-xs poppins mb-2"
        >
          Don't have an account? Sign Up
        </Link>
        <Link
          href={{ pathname: "/auth", query: { route: "forgot password" } }}
          className="text-white text-xs poppins"
        >
          Forgot Password?
        </Link>
        <Button
          variant="contained"
          onClick={handleOpen}
          className="w-full bg-[#37B9CB] capitalize py-3.5 mt-4 text-lg inter shadow-none rounded-lg"
        >
          Sign In
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              className="poppins text-center font-semibold"
              variant="h6"
              component="h2"
            >
              Please insert your login OTP
            </Typography>
            <Box className="flex flex-col items-center mt-5">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={5}
                otpType="number"
                disabled={false}
                inputClassName="border-[1.5px] border-black rounded-md poppins"
              />
              <ResendOTP
                onResendClick={() => console.log("Resend clicked")}
                className="w-full mt-5 poppins underline underline-offset-4"
              />
            </Box>
            <Button
              variant="contained"
              onClick={loginUser}
              className="w-full bg-[#37B9CB] capitalize py-2.5 mt-4 text-sm inter shadow-none rounded-lg"
            >
              Verify
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

//

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleForgetPassword = () => {
    if (!email) {
      return toast.error("Email is required!");
    }
    if (validator.isEmail(email) === false) {
      toast.error("Invalid Email!");
      return;
    }
    axios({
      method: "PUT",
      data: {
        email,
      },
      withCredentials: true,
      url: "http://localhost:3000/api/password",
    })
      .then(() => toast.success("Reset Password email sent!"))
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.error);
      });
  };
  return (
    <Box className="w-full h-full p-[8%]">
      <Image src={techsyhub} alt="logo" className="h-14 w-auto" />
      <Typography className="spinnaker text-8xl mt-5 text-white w-2/4">
        Forget Password
      </Typography>
      <Typography className="inter w-2/4 text-xl mt-5 text-white">
        "Lorem ipsum dolor sit amet, consectetur aeiusmod tempor incididunt ut
        labore et dolore magna .
      </Typography>
      <Box className="flex flex-col items-end mt-8 w-[35%]">
        <Link
          href={{ pathname: "/auth" }}
          className="text-white mb-2 text-xs poppins"
        >
          Back to Login?
        </Link>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Please Enter Your Email Address"
        />
        <Button
          variant="contained"
          onClick={handleForgetPassword}
          className="w-full bg-[#37B9CB] capitalize py-3.5 mt-4 text-lg inter shadow-none rounded-lg"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSignUp = async () => {
    if (!full_name || !email || !password || !confirmPassword) {
      toast.error("Please Complete Form!");
      return;
    }
    if (validator.isEmail(email) === false) {
      toast.error("Invalid Email!");
      return;
    }
    if (password.length < 7) {
      toast.error("Password length should be at least 7 characters!");
      return;
    }
    if (confirmPassword !== password) {
      toast.error("Confirm Password does not match!");
      return;
    }
    await axios({
      method: "POST",
      data: {
        email,
        password,
        full_name,
      },
      withCredentials: true,
      url: "http://localhost:3000/api/register",
    }).then((res) => {
      toast.success("Verification email send!");
      router.push({ path: "/auth", query: { route: "sign in" } });
    });
  };
  return (
    <Box className="w-full h-full p-[8%]">
      <Image src={techsyhub} alt="logo" className="h-14 w-auto" />
      <Typography className="spinnaker text-8xl mt-5 text-white">
        Sign Up
      </Typography>
      <Typography className="inter w-2/4 text-xl mt-5 text-white">
        "Lorem ipsum dolor sit amet, consectetur aeiusmod tempor incididunt ut
        labore et dolore magna .
      </Typography>
      <Box className="flex flex-col items-end mt-14 w-[35%]">
        <input
          type="text"
          value={full_name}
          onChange={(e) => setFull_name(e.target.value)}
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Full Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Email Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Confirm Password"
        />
        <Link
          href={{ pathname: "/auth" }}
          className="text-white text-xs poppins"
        >
          Already have an account? Sign In!
        </Link>
        <Button
          variant="contained"
          onClick={handleSignUp}
          className="w-full bg-[#37B9CB] capitalize py-3.5 mt-4 text-lg inter shadow-none rounded-lg"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

const ResetPassword = () => {
  const router = useSearchParams();
  const token = router.get("token");
  console.log({ token });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleReset = () => {
    if (!password || !confirmPassword) {
      toast.error("Please enter passwords!");
      return;
    }
    if (password.length < 7) {
      toast.error("Password length should be at least 7 characters!");
      return;
    }
    if (confirmPassword !== password) {
      toast.error("Confirm Password does not match!");
      return;
    }
    axios({
      method: "PUT",
      data: {
        password,
      },
      withCredentials: true,
      url: `http://localhost:3000/api/reset?token=${token}`,
    })
      .then(() => toast.success("Your password has been reset!"))
      .catch((err) => console.log(err));
  };
  return (
    <Box className="w-full h-full p-[8%]">
      <Image src={techsyhub} alt="logo" className="h-14 w-auto" />
      <Typography className="spinnaker w-3/4 text-8xl mt-5 text-white">
        Reset Password
      </Typography>
      <Box className="flex flex-col items-end mt-14 w-[35%]">
        <input
          type="password"
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Please Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="bg-white w-full text-[#adadad] poppins py-4 mb-4 ps-4 px-2 rounded-lg text-sm"
          placeholder="Please Enter Your Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Link
          href={{ pathname: "/auth", query: { route: "sign up" } }}
          className="text-white text-xs poppins mb-2"
        >
          Don't have an account? Sign Up
        </Link>
        <Link
          href={{ pathname: "/auth", query: { route: "forgot password" } }}
          className="text-white text-xs poppins"
        >
          Forgot Password?
        </Link>
        <Button
          variant="contained"
          onClick={handleReset}
          className="w-full bg-[#37B9CB] capitalize py-3.5 mt-4 text-lg inter shadow-none rounded-lg"
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};
