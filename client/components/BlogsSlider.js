"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { blogs } from "../assets/data";

export default function BlogsSlider() {
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="blogs-slider"
        style={{ padding: "15px 0" }}
      >
        {blogs.slice(0, 3)?.map((blog, i) => (
          <SwiperSlide key={i}>
            <Card className="shadow-none mx-0 rounded-lg blog-card">
              <Box className="w-full overflow-hidden">
                <CardMedia
                  className="h-64 w-auto blog-image"
                  image={blog.image.src}
                  title={blog.title}
                />
              </Box>
              <CardContent className="bg-[#e9e9e9] blog-content text-[#838181]">
                <Box className="w-full flex justify-between">
                  <Typography className="text-sm hover-white poppins">
                    By: {blog.author}
                  </Typography>
                  <Typography className="text-sm hover-white poppins">
                    {blog.date}
                  </Typography>
                </Box>
                <Typography className="text-xl my-4 text-black font-semibold hover-white poppins">
                  {blog.title}
                </Typography>
                <Typography className="text-sm  my-4 w-3/4 hover-white poppins">
                  {blog.content}
                </Typography>
                <Typography className="text-black cursor-pointer text-sm hover-white poppins">
                  Read More
                </Typography>
              </CardContent>
            </Card>
            {/* <Card className="shadow-none mx-0 md:mx-2 relative">
              <CardMedia
                component="img"
                className="h-56  object-cover"
                image={blog.image.src}
                title={blog.title}
                style={{ borderRadius: "0px 30px 0px 30px" }}
              />
              <Box className="h-56 w-full blog-card-bg absolute top-0" />
              <CardContent>
                <Box className="w-full flex justify-between items-end">
                  <Typography className="text-lg">{blog.title}</Typography>
                  <Button
                    variant="contained"
                    className=" bg-[#37B9CB] capitalize shadow-none text-xs px-7 py-2 rounded-md"
                  >
                    Learn More
                  </Button>
                </Box>
                <Box className="w-full flex text-[#aaa9a9] mt-2">
                  <Typography className="text-sm">
                    <CalendarMonthIcon className="mr-1 text-sm" /> {blog.date}
                  </Typography>
                  <Typography className="text-sm ml-2">
                    By: {blog.author}
                  </Typography>
                </Box>
              </CardContent>
            </Card> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
