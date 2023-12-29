"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import Hero from "@/components/Blogs/Hero";
import Blog from "@/components/Blogs/Blog";
import Related from "@/components/Blogs/Related";
import Contact from "@/components/Contact";
import cover from "@/assets/blogscover.png";

const Blogs = () => {
  const router = useSearchParams();
  const route = router.get("id");
  const caption =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <Box className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero bg={cover} title={"Our Blogs"} caption={caption} />
      {/* Blog & Sidebar */}
      <Blog route={route} />
      {/* Related Blogs */}
      {!route && <Related />}
      {/* Trending Blogs */}
      <Related title={"Trending Blogs"} />
      {/* Contact */}
      <Contact />
    </Box>
  );
};

export default Blogs;
