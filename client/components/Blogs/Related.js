"use client";
import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { blogs } from "@/assets/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";

const RelatedCard = ({ blog }) => {
  return (
    <Link href={{ pathname: "/blogs", query: { id: "123" } }}>
      <Card className="shadow-none rounded-lg blog-card mx-2.5 bg-transparent">
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
    </Link>
  );
};

const Related = ({ title }) => {
  return (
    <Box className="h-fit w-full px-8 md:px-16">
      <Typography className="text-4xl text-[#37b9cb] spinnaker">
        {title || "Related Blogs"}
      </Typography>
      <Box className="w-full h-fit my-8">
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
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="blogs-slider"
          style={{ padding: "15px 0" }}
        >
          {blogs.slice(0, 3)?.map((blog, i) => (
            <SwiperSlide key={i}>
              <RelatedCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Related;
