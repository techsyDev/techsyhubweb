import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import factory from "@/assets/factory.svg";
import { collage } from "@/assets/data";

const CollageGrid = () => {
  return (
    <div class="parent lg:h-[150vh] md:h-screen h-fit w-full rounded-xl hidden md:grid mb-20">
      {collage.map((col, i) => (
        <div key={i} className={`div${i + 1} overflow-hidden relative`}>
          <Box
            sx={{ backgroundImage: `url(${col.bg.src})` }}
            className="collage-bg w-full h-full"
          />
          <Box className="h-full z-10 w-full absolute bottom-0 collage-card-bg flex flex-col justify-end items-start p-10 text-white ">
            <Typography className=" uppercase text-lg lg:text-3xl w-3/5">
              {col.title}
            </Typography>
            <Typography className="uppercase text-lg lg:text-3xl w-4/5 mt-3">
              {col?.sub}
            </Typography>
          </Box>
        </div>
      ))}
    </div>
  );
};
const MobileGrid = () => {
  return (
    <Grid className="h-fit rounded-xl flex md:hidden" container>
      {collage.map((col, i) => (
        <Grid item key={i} xs={6}>
          <div
            style={{ backgroundImage: `url(${col.bg.src})` }}
            className="h-40 swiper-bg"
          >
            <Box className="h-full w-full collage-card-mob-bg flex flex-col justify-end items-start px-5 pb-3 text-white ">
              <Typography className=" uppercase text-sm">
                {col.title}
              </Typography>
              <Typography className="uppercase text-sm mt-3">
                {col?.sub}
              </Typography>
            </Box>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

const Industries = () => {
  return (
    <>
      <Box
        className="w-full mt-10 h-[80vh] flex flex-col justify-end px-6 md:px-28 pb-16 bg-[#f5f5f5] swiper-bg"
        sx={{ backgroundImage: `url(${factory.src})` }}
      >
        <Typography className="text-xl md:text-4xl inter text-[#9ce9f4] uppercase mb-2 md:mb-6">
          OUR INDUSTRIES
        </Typography>
        <Typography className="text-3xl md:text-4xl spinnaker tracking-wide text-[#0295A9] capitalize w-full md:w-3/4">
          We Provide Services For Many Industries Majorly Are
        </Typography>
      </Box>
      <CollageGrid />
      <MobileGrid />
    </>
  );
};

export default Industries;
