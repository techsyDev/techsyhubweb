import React from "react";
import { Typography } from "@mui/material";
import PartnerSlider from "./PartnerSlider";

const Partners = () => {
  return (
    <>
      <Typography className="text-lg md:text-4xl inter text-[#9ce9f4] uppercase mb-2 md:mb-2 p-8">
        OUR PROUD PARTNERS
      </Typography>
      <Typography className="text-xl md:text-4xl w-full lg:w-4/5 tracking-wide spinnaker text-[#0295A9] px-8">
        We partner with global enterprises and high-growth companies
      </Typography>
      <PartnerSlider />
    </>
  );
};

export default Partners;
