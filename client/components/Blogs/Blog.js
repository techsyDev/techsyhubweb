import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import bloghead from "../../assets/blog-head.png";
import { blogsCategories, latestPosts, blogs } from "../../assets/data";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ route }) => {
  return (
    <Grid
      container
      className="h-fit px-8 py-12 md:p-16 flex flex-col-reverse lg:flex-row"
    >
      {/* Popular Blogs */}
      {!route && (
        <Grid item xs={12} md={9} className="md:pe-16">
          <Grid container>
            <Grid item xs={12} className="ps-5">
              <Typography className="text-4xl text-[#37b9cb] spinnaker">
                Popular Blogs
              </Typography>
            </Grid>
            {blogs.slice(0, 4)?.map((blog, i) => (
              <Grid item xs={12} md={6} key={i}>
                <RelatedCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      {/* Blog */}
      {route && (
        <Grid item xs={12} md={9} className="md:pe-16">
          <Image src={bloghead} alt="blog" className="rounded-lg w-full" />
          <Typography className="text-4xl text-[#37b9cb] mt-16 spinnaker">
            Blog Title
          </Typography>
          <Typography className="text-base text-[#585858] leading-8 mt-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id
            <br />
            <br />
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            officia deserunt mollit anim "
          </Typography>
        </Grid>
      )}
      {/* Sidebar */}
      <Grid
        item
        xs={12}
        md={3}
        className="mb-5 md:mb-0 block md:flex lg:block md:ps-6"
      >
        <Box className="w-full md:px-5 lg:px-0 px-0">
          <input
            type="text"
            placeholder="Enter your keywords"
            //   value={value}
            //   onChange={(e) => setValue(e.target.value)}
            className="bg-[#eaeaea] text-[#adadad] py-3 ps-6 px-2 w-full rounded-lg text-lg"
          />
          <Box className="w-full mt-10">
            <Typography className="text-xl border-b-2 uppercase pb-1">
              Categories
            </Typography>
            {blogsCategories.map((cat, i) => (
              <Box className="flex justify-between my-5" key={i}>
                <Typography className="text-sm capitalize">
                  {cat.title}
                </Typography>
                <Typography className="text-sm">({cat.number})</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="w-full lg:mt-8 md:mt-0 mt-8 md:px-5 lg:px-0 px-0">
          <input
            type="text"
            placeholder="Enter your keywords"
            //   value={value}
            //   onChange={(e) => setValue(e.target.value)}
            className="bg-[#eaeaea] text-[#adadad] py-3 ps-6 px-2 w-full text-lg rounded-lg"
          />
          <Box className="w-full mt-10">
            <Typography className="text-xl border-b-2 uppercase pb-1">
              Latest Posts
            </Typography>
            {latestPosts.slice(0, route ? 3 : 5).map((cat, i) => (
              <Box className="flex my-5" key={i}>
                <Image src={cat.image} alt={cat.title} className="h-20" />
                <Box className="ms-3">
                  <Typography className="text-xs text-[#919191] mb-3">
                    {cat.date}
                  </Typography>
                  <Typography className="text-base capitalize">
                    {cat.title}
                  </Typography>
                </Box>
                {/* <Typography className="text-sm">({cat.number})</Typography> */}
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      {!route && (
        <Grid item xs={12}>
          <Grid container>
            {blogs.slice(0, 3)?.map((blog, i) => (
              <Grid item xs={12} md={4} key={i}>
                <RelatedCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

const RelatedCard = ({ blog }) => {
  return (
    <Link href={{ pathname: "/blogs", query: { id: "123" } }}>
      <Card className="shadow-none rounded-lg blog-card m-5 bg-transparent">
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
      {/* <Card className="shadow-none mx-0 rounded-lg p-5 bg-transparent blog-card">
        <CardMedia
          className="h-64 w-auto blog-image"
          image={blog.image.src}
          title={blog.title}
        />
        <CardContent className="bg-[#e9e9e9] blog-content text-[#838181]">
          <Box className="w-full flex justify-between">
            <Typography className="text-sm hover-white">
              By: {blog.author}
            </Typography>
            <Typography className="text-sm hover-white">{blog.date}</Typography>
          </Box>
          <Typography className="text-xl my-4 text-black font-semibold hover-white">
            {blog.title}
          </Typography>
          <Typography className="text-sm  my-4 w-3/4 hover-white">
            {blog.content}
          </Typography>
          <Typography className="text-black cursor-pointer text-sm hover-white">
            Read More
          </Typography>
        </CardContent>
      </Card> */}
    </Link>
  );
};

export default Blog;
