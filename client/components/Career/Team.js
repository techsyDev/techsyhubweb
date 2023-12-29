import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { members } from "../../assets/data";

const MemberCard = ({ member }) => {
  return (
    <div
      style={{ backgroundImage: `url(${member.image.src})` }}
      className="swiper-bg h-72 rounded-lg"
    >
      <Box className="h-full w-full rounded-lg team-card-bg flex flex-col justify-end items-center p-10 text-white ">
        <Typography className=" capitalize text-lg md:text-xl text-center">
          {member.name}
        </Typography>
        <Typography className="capitalize text-sm md:text-base text-center">
          {member.designation}
        </Typography>
      </Box>
    </div>
  );
};

const Team = () => {
  return (
    <Box className="h-fit w-full py-10 px-5 md:p-10">
      <Box className="w-full h-full bg-white rounded-xl px-10 py-16">
        <Box className="flex flex-col justify-center items-center h-2/5">
          <Typography className="text-xl md:text-4xl inter text-[#9ce9f4] uppercase mb-2 md:mb-6">
            MEET OUR TEAM
          </Typography>
          <Typography className="text-3xl md:text-5xl spinnaker tracking-wide text-[#37b9cb] text-center capitalize">
            Who are behind our vision
          </Typography>
        </Box>
        <Grid container className="h-3/5 mt-8">
          {members.map((member, i) => (
            <Grid item xs={12} md={3} sm={6} key={i} className="px-5 py-5 lg:py-0">
              <MemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Team;
