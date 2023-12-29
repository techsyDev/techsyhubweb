import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import dev from "@/assets/dev.png";
import { services } from "@/assets/data";
import Image from "next/image";

const Service = () => {
  return (
    <Box className="h-auto w-full py-8 px-4 md:px-12  bg-[#f5f5f5]">
      <Grid
        container
        className="h-fit w-full rounded-3xl bg-[#fcfcfc] px-6 md:px-12 pt-4 pb-16 relative mt-10"
      >
        <Grid
          item
          xs={12}
          sm={6}
          className="flex flex-col justify-end z-10 md:z-0 h-56 md:h-auto"
        >
          <Typography className="text-xl md:text-2xl lg:text-4xl text-[#9ce9f4] uppercase mb-2 md:mb-6">
            Our Services
          </Typography>
          <Typography className="text-3xl md:text-4xl lg:text-5xl tracking-wide text-[#37b9cb] capitalize">
            We offer a wide variety of services
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className="flex items-end z-10 md:z-0 relative h-fit md:h-80 mt-5 md:mt-0"
        >
          <Typography className="text-base lg:text-xl text-[#919191] lg:w-3/4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna .
          </Typography>
        </Grid>
        <Image
          src={dev}
          alt="service-dev"
          className="lg:h-80 w-auto md:h-64 h-48 absolute right-5 -top-5"
        />
        <Grid item xs={12} className="h-14" />
        {services.map((ser, i) => (
          <Grid item xs={12} sm={6} md={4} className="p-3" key={i}>
            <Box
              style={{ backgroundImage: `url(${ser.bg.src})` }}
              className="h-80 rounded-lg swiper-bg scale-bg"
            >
              <Box className="h-full w-full service-card-bg rounded-lg flex items-end justify-center">
                <Box className="w-3/5 p-3 flex items-center justify-center text-white bg-[#0295a9] mb-4 rounded-lg">
                  <Image className="mr-2 h-14" src={ser.icon} alt={ser.title} />
                  <Typography className="font-light">{ser.title}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;
