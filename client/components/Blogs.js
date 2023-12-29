import React from "react";
import { Box, Typography } from "@mui/material";
import arrows from "@/assets/arrows-blog.png";
import BlogsSlider from "./BlogsSlider";
import Link  from "next/link";
import Image from "next/image";

const Blogs = () => {
  return (
    <Box className="h-fit w-full py-10 px-5 md:px-8">
      <Box className="w-full h-full bg-white rounded-2xl p-10 md:p-20 pb-10">
        <Box className="flex justify-between items-end h-2/5">
          <Box className="block md:w-3/4 w-full">
            <Typography className="text-xl md:text-4xl inter text-[#63D3E2] uppercase mb-2 md:mb-10">
              FIND OUR BLOGS
            </Typography>
            <Typography className="text-3xl md:text-5xl spinnaker tracking-wide text-[#37B9CB] capitalize">
              Get Updated With Latest Information
            </Typography>
          </Box>
          <Box className="md:block hidden">
            <Image src={arrows} alt="arrows" className="h-60 w-auto" />
          </Box>
        </Box>
        <Box className="h-3/5 mt-8">
          <BlogsSlider />
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
