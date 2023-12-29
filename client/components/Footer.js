"use client";
import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import techsyhub from "../assets/logo.svg";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import footerbg from "../assets/footer-bg.png";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const path = usePathname();
  const pages = ["Home", "Services", "Blogs", "Career", "Contact Us"];
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      icon: <LinkedInIcon />,
      link: "/",
    },
    {
      icon: <InstagramIcon />,
      link: "/",
    },
    {
      icon: <TwitterIcon />,
      link: "/",
    },
  ];
  return (
    <Box
      className={`h-fit w-full ${path === "/management" ? "hidden" : "block"}`}
      sx={{ backgroundImage: `url(${footerbg.src})` }}
    >
      <Box className="w-full h-[380px] footer-bg py-16 px-3 md:px-16 lg:px-24 flex">
        <Box className="w-[35%] h-full text-white">
          <Image src={techsyhub} alt="TechsyHub" className="w-48" />
          <Box className="mt-8">
            <Typography className="font-normal poppins text-xs my-2">
              Send emails to:
            </Typography>
            <Typography className="font-semibold poppins text-base my-2">
              techsyhub@gmail.com
            </Typography>
            <Typography className="font-normal poppins text-xs my-2">
              Copyrights 2023, All rights reserved
            </Typography>
          </Box>
        </Box>
        <Box className="w-[25%] h-full text-white">
          <Typography className="font-semibold poppins text-xl my-2">
            Contact Us
          </Typography>
          <Typography className="font-normal poppins text-sm my-2">
            +92 1234567890
          </Typography>
          <Typography className="font-normal poppins text-sm my-2">
            www.techsyhub.com
          </Typography>
          <Typography className="font-semibold poppins text-xl mt-8 mb-2">
            Location
          </Typography>
          <Typography className="font-normal poppins text-sm my-2">
            Somewhere, Karachi
          </Typography>
        </Box>
        <Box className="w-[20%] h-full text-white">
          <Typography className="font-semibold poppins text-xl my-2">
            Guide
          </Typography>
          <Typography className="font-normal poppins text-sm my-2">
            Terms & Conditions
          </Typography>
          <Typography className="font-normal poppins text-sm my-2">
            Privacy Policy
          </Typography>
        </Box>
        <Box className="w-[20%] h-full text-white flex justify-end">
          <Box>
            <Typography className="font-semibold poppins text-xl my-2 text-white">
              Links
            </Typography>
            {pages.map((page) => (
              <Link href="/">
                <Typography
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                  className="text-sm font-normal poppins"
                >
                  {page}
                </Typography>
              </Link>
            ))}
            {socialLinks.map((link, i) => (
              <Link href={link.link} key={i} className="pe-3">
                {link.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      {/* <Grid
        container
        className="w-full h-[420px] footer-bg py-16 px-3 md:px-16 lg:px-24 flex"
      >
        <Grid
          item
          className=" h-fit md:h-auto flex md:block gap-x-4 md:gap-x-0 my-2 lg:my-0"
          xs={12}
          sm={6}
          md={4}
        >
          <Box className="h-[49%] text-white">
            <Image src={techsyhub} alt="TechsyHub" className="w-48" />
          </Box>
          <Box className="h-[49%] text-white">
            <Typography className="font-normal text-xs my-2">
              Send emails to:
            </Typography>
            <Typography className="font-semibold text-base my-2">
              techsyhub@gmail.com
            </Typography>
            <Typography className="font-normal text-xs my-2">
              Copyrights 2023, All rights reserved
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          className=" h-fit md:h-auto flex md:block gap-x-4 md:gap-x-0 my-2 lg:my-0"
          xs={12}
          sm={6}
          md={3}
        >
          <Box className="h-[49%] text-white">
            <Typography className="font-semibold text-xl my-2">
              Contact Us
            </Typography>
            <Typography className="font-normal text-sm my-2">
              +92 1234567890
            </Typography>
            <Typography className="font-normal text-sm my-2">
              www.techsyhub.com
            </Typography>
          </Box>
          <Box className="h-[49%] text-white mt-0 md:mt-4 lg:mt-0">
            <Typography className="font-semibold text-xl my-2">
              Location
            </Typography>
            <Typography className="font-normal text-sm my-2">
              Somewhere, Karachi
            </Typography>
          </Box>
        </Grid>

        <Grid item className=" text-white" xs={5} sm={6} md={3}>
          <Typography className="font-semibold text-xl my-2">Guide</Typography>
          <Typography className="font-normal text-sm my-2">
            Terms & Conditions
          </Typography>
          <Typography className="font-normal text-sm my-2">
            Privacy Policy
          </Typography>
        </Grid>

        <Grid item xs={7} sm={6} md={2} className="flex flex-col items-end">
          <Box className="pe-4">
            <Typography className="font-semibold text-xl my-2 text-white">
              Links
            </Typography>
            {pages.map((page) => (
              <Link href="/">
                <Typography
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                  className="text-sm font-normal"
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box className="w-full text-white flex justify-end">
            {socialLinks.map((link, i) => (
              <Link href={link.link} key={i} className="ps-2">
                {link.icon}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default Footer;
