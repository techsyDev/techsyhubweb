"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, EffectFade } from "swiper/modules";

// Asset
import swiperbg from "@/assets/swiperbg.jpg";
import human from "@/assets/human pointing.svg";
import { swiperData } from "@/assets/data";

import { Button, Grid, Typography, Box } from "@mui/material";

export default function MainSwiper() {
  return (
    <Box className="w-full h-full relative">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation, EffectFade]}
        className="h-[50vh] md:h-[120vh] main-swiper"
        effect={"fade"}
      >
        {swiperData?.map((data, i) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${swiperbg.src})` }}
            className="swiper-bg relative"
            key={i}
          >
            <Grid container className="h-full swiper-color-bg px-[8%]">
              <Grid
                item
                xs={12}
                sm={5}
                className="text-white mt-[4%] h-full w-full flex flex-col justify-center gap-y-2 md:gap-y-4"
              >
                <Typography className="text-3xl md:text-5xl lg:text-8xl  capitalize spinnaker">
                  {data.heading}
                </Typography>
                <Typography className="text-lg md:text-xl lg:text-3xl inter capitalize text-[#9CE9F4]">
                  {data.sub}
                </Typography>
                <Typography className="text-xs md:text-sm lg:text-lg w-3/4  inter capitalize">
                  "{data.para}
                </Typography>
                <Button
                  variant="contained"
                  className="w-fit rounded-lg text-lg bg-[#37B9CB] capitalize py-3 px-7 shadow-none"
                >
                  {data.btn}
                </Button>
              </Grid>
              <Grid item xs={1} className="hidden lg:block" />
              <Grid
                item
                xs={12}
                sm={6}
                className="flex items-center justify-end mt-32"
              >
                <Image src={data.image} alt={data.heading} className="h-[64%]" />
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={human}
        alt={"human pointing"}
        className="h-48 md:h-80 absolute -bottom-20 z-20 right-0 md:right-4 lg:right-28 w-fit"
      />
    </Box>
  );
}
