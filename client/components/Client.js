import React from "react";
import { Box, Typography } from "@mui/material";
import clientbg from "@/assets/clientbg.svg";
import Testimonials from "./Testimonials";

const Client = () => {
  return (
    <Box
      className="w-full h-[140vh] bg-[#f5f5f5] mt-10"
      sx={{ backgroundImage: `url(${clientbg.src})` }}
    >
      <Box className="w-full h-full client-bg py-24">
        <Box className="px-16">
          <Typography className="text-2xl md:text-3xl text-[#5ED1E1] uppercase mb-2 md:mb-6">
            OUR Clients
          </Typography>
          <Typography className="text-3xl md:text-5xl tracking-wide text-white capitalize w-full md:w-3/4 lg:w-2/5">
            Trusted from Over 1500+ Client
          </Typography>
        </Box>
        <Testimonials />
      </Box>
    </Box>
  );
};

export default Client;
