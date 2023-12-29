"use client";
import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import EmailIcon from "../assets/icons/Email.svg";
import FacebookIcon from "../assets/icons/Facebook.svg";
import LinkedInIcon from "../assets/icons/LinkedIn.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
import Navigation from "./Navigation";
import Image from "next/image";


const Header = ({route}) => {
  const socialLinks = [
    {
      icon: FacebookIcon,
      link: "/",
    },
    {
      icon: LinkedInIcon,
      link: "/",
    },
    {
      icon: InstagramIcon,
      link: "/",
    },
  ];

  return (
    <Box
      className={`relative z-10 w-full`}
    >
      <Box className="static md:absolute top-0 w-full">
        {/* Social Links Bar */}
        <Box className="w-full flex justify-center md:justify-end items-center text-white bg-[#3ba8b6] h-10 gap-x-5 md:pe-20 text-xs md:text-sm">
          <Link
            href="mailto:techsyhub@gmail.com"
            className="gap-x-1 flex items-end"
          >
            <Image src={EmailIcon} alt={"info@techsyhub.com"} className="w-4" />
            {"info@techsyhub.com"}
          </Link>
          {socialLinks.map((link, i) => (
            <Link href={link.link} key={i} className="gap-x-1 flex items-end">
              <Image src={link.icon} alt={link?.text} className="h-6" />{" "}
              {link?.text}
            </Link>
          ))}
        </Box>
        {/* Navigation Bar */}
        <Navigation route={route} />
      </Box>
    </Box>
  );
};

export default Header;
