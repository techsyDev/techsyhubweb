import React from "react";
import { Box } from "@mui/material";
import Hero from "@/components/Blogs/Hero";
import cover from "@/assets/careercover.png";
import Collage from "@/components/Career/Collage";
import Team from "@/components/Career/Team";
import Hiring from "@/components/Career/Hiring";

const Careers = () => {
  const caption =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <Box className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero bg={cover} title={"Join Our Team"} caption={caption} />
      {/* Collage Grid */}
      <Collage />
      {/* Team */}
      <Team />
      {/* Career Opportunities */}
      <Hiring />
    </Box>
  );
};

export default Careers;
