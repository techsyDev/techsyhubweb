import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import aboutimg from "@/assets/about-img.svg";
import arrow from "@/assets/arrow.svg";
import gears from "@/assets/gears.svg";
import Partners from "./Partners";
import Image from "next/image";

const About = () => {
  return (
    <Grid
      container
      className="h-fit bg-[#f5f5f5] flex flex-col-reverse lg:flex-row w-full px-6 md:px-12 relative"
    >
      {/* Partners for Tablet screen */}
      <Grid
        item
        xs={12}
        className="h-fit w-full hidden md:block lg:hidden bg-white rounded-3xl mt-32 p-10"
      >
        <Partners />
      </Grid>

      {/* Partners for mobile */}
      <Grid
        item
        xs={12}
        className="h-fit w-full block md:hidden bg-white rounded-3xl mt-12 p-10"
      >
        <Partners />
      </Grid>

      {/* About Image */}
      <Grid
        item
        xs={12}
        md={6}
        className="flex h-[110vh] flex-col justify-end items-end relative"
      >
        <Image src={aboutimg} alt="about display" className="w-[90%]" />
        <Image
          src={arrow}
          alt="arrow"
          className="absolute h-28 md:h-56 -bottom-20 md:-bottom-40 left-5 md:left-16"
        />
      </Grid>
      {/* About Title */}
      <Grid
        item
        xs={12}
        md={6}
        className="relative flex h-[110vh] flex-col justify-end ps-[4%] pe-[13%]"
      >
        <Typography className="text-xl md:text-4xl text-[#9ce9f4] inter uppercase mb-2 md:mb-6">
          ABOUT US
        </Typography>
        <Typography className="text-3xl spinnaker md:text-5xl tracking-wide text-[#0295A9] capitalize">
          We Boast Your Business
        </Typography>
        <Typography className="text-xs inter md:text-sm lg:text-2xl text-[#919191] mt-4">
          "We have the top experienced and skillful team from all over the world
          that helps you bring your business to the next level.
          <br />
          <br />
          We care about your business and facilitates you with highest quality
          and satisfied results”
        </Typography>
        <Image
          src={gears}
          alt="gears"
          className="h-36 absolute top-7 -right-20 hidden md:block"
        />
      </Grid>
      {/* Partners for Large screen */}
      <Grid item xs={12} className="h-fit w-full hidden lg:block mt-32 px-8">
        <Box className="bg-white rounded-3xl w-full p-10">
          <Partners />
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
