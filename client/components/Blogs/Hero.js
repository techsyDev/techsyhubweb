import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = ({bg, title, caption}) => {
  return (
    <Box
      className="w-full h-[94vh] swiper-bg"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Box className="h-full w-full hero-color-bg flex flex-col justify-center items-center text-white text-center">
        <Typography className="text-3xl md:text-6xl tracking-wide capitalize mt-32 spinnaker">
          {title}
        </Typography>
        <Typography className="text-base md:text-lg w-[90%] md:w-2/4 text-[#f2f2f2] mt-5 inter">
          "{caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
