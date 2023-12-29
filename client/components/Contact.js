import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { contacts } from "@/assets/data";
import Image from "next/image";

const Field = ({ type, placeholder, value, setValue }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      //   value={value}
      //   onChange={(e) => setValue(e.target.value)}
      className="bg-white text-[#919191] py-3 ps-6 px-2 w-full rounded-lg"
    />
  );
};

export const Contact = ({ white, head, px }) => {
  return (
    <Box className="w-full h-fit py-10">
      <Box className="w-full h-1/5 flex flex-col items-center justify-center text-center pb-10">
        <Typography
          className={`text-xl md:text-4xl ${
            head ? "text-[#37B9CB]" : "text-[#9ce9f4]"
          } uppercase mb-2`}
        >
          CONTACT US
        </Typography>
        <Typography
          className={`text-3xl md:text-5xl tracking-wide ${
            head ? "text-white" : "text-[#37B9CB]"
          }  capitalize`}
        >
          Get Your Quote
        </Typography>
      </Box>
      <Grid container className={`px-6 ${px ? "md:px-20" : "md:px-32"} mt-8`}>
        <Grid item xs={12} md={5} className="px-3">
          <Typography className="text-base md:text-lg text-[#37B9Cb] uppercase mb-2">
            CONTACT Info
          </Typography>
          <Typography
            className={`text-xs leading-6 ${
              white ? "text-white" : "text-[#B7B4B4]"
            } mt-4`}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </Typography>
          <Box className="w-full h-fit mt-10">
            {contacts.map((contact, i) => (
              <Box className="flex items-center my-5" key={i}>
                <Box className="w-10 h-10 flex items-center justify-center text-white rounded-full bg-[#37B9CB]">
                  <Image src={contact.icon} alt="contact icon" className="p-3 w-full" />
                </Box>
                <Box className="ms-4">
                  <Typography className="text-base text-[#37b9cb] capitalize">
                    {contact.title}
                  </Typography>
                  <Typography
                    className={`text-base ${
                      white ? "text-white" : "text-[#B7B4B4]"
                    }`}
                  >
                    {contact.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={7} className={`px-4 ${px ? "lg:ps-20" : "md:px-10"} `}>
          <Grid container>
            <Grid item xs={12} sm={6} className="p-2">
              <Field type={"text"} placeholder={"User Name"} />
            </Grid>
            <Grid item xs={12} sm={6} className="p-2">
              <Field type={"email"} placeholder={"Email Address"} />
            </Grid>
            <Grid item xs={12} sm={6} className="p-2">
              <Field type={"number"} placeholder={"Phone Number"} />
            </Grid>
            <Grid item xs={12} sm={6} className="p-2">
              <Field type={"text"} placeholder={"Subject"} />
            </Grid>
            <Grid item xs={12} sm={6} className="p-2">
              <Field type={"text"} placeholder={"100$-500$"} />
            </Grid>
            <Grid item xs={12} sm={6} className="p-2">
              <Field type={"text"} placeholder={"Web Development"} />
            </Grid>
            <Grid item xs={12} className="p-2">
              <textarea
                className="w-full h-48 bg-white text-[#919191] p-6 rounded-lg"
                placeholder="Write Your Message..."
              />
            </Grid>
            <Grid item xs={12} className="p-2">
              <Button
                variant="contained"
                className="w-full bg-[#0295A9] capitalize py-2.5 shadow-none rounded-lg"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
