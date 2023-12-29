"use client"
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import MainSwiper from "@/components/MainSwiper";
import Service from "@/components/Service";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Client from "@/components/Client";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    fetch("/api/check").then((res) => console.log(res));
  }, []);

  return (
    <Box className="w-full min-h-screen">
      {/* Swiper */}
      <MainSwiper />
      {/* Service Section */}
      <Service />
      {/* About & Partners */}
      <About />
      {/* Industries */}
      <Industries />
      {/* Clients */}
      <Client />
      {/* Blogs */}
      <Blogs />
      {/* Contact */}
      <Contact />
    </Box>
  );
};

export default Home;
