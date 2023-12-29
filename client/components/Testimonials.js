"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { testimonials } from "../assets/data";

import { Box, Typography } from "@mui/material";
import commablue from "../assets/comma-blue.svg";
import commagrey from "../assets/comma-grey.svg";

export default function Testimonials() {
  return (
    <Box className="overflow-x-hidden mt-8">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        roundLengths={true}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={1}
        className="test-swiper"
      >
        {testimonials.map((test, i) => (
          <SwiperSlide className="h-72" key={i}>
            <Box className="w-full slide-box bg-white flex flex-col items-center justify-center px-6 relative">
              <Image
                src={commablue}
                alt="commablue"
                className="h-10 md:h-16 md:mb-5 mb-2 hidden commablue"
              />
              <Image
                src={commagrey}
                alt="commagrey"
                className="h-10 md:h-16 mb-2 commagrey"
              />
              <Typography className="text-xs test-review md:text-sm poppins lg:text-lg px-0 md:px-10 text-[#6967A3] mt-4 text-center">
                "{test.review}
              </Typography>
              <Box className="absolute profile-box -bottom-4 md:-bottom-8 md:left-6 flex w-full ps-10">
                <Image
                  src={test.profile}
                  alt="profile"
                  className="md:h-16 md:w-16 h-12 w-12 test-profile"
                />
                <Image
                  src={test.profile}
                  alt="profile"
                  className="md:h-28 md:w-28 h-16 w-16 hidden test-profile-active"
                />
                <Typography className="text-xs md:text-sm lg:text-lg ml-5 mt-2 poppins text-[#61d0df] text-center">
                  {test.name}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
