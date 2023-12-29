import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { opportunities } from "../../assets/data";

const Opportunity = ({ data }) => {
  return (
    <Grid
      container
      className="md:h-40 h-fit py-3 md:py-0 lg:w-5/6 w-full bg-white rounded-md my-3 px-4 lg:px-0"
    >
      <Grid
        item
        xs={12}
        sm={3}
        className="flex flex-col md:items-center items-start justify-center"
      >
        <Box>
          <Typography className="text-lg text-[#9ce9f4] capitalize mb-2 text-left">
            {data.designation}
          </Typography>
          <Box className="flex">
            <Typography className="text-sm text-black capitalize w-2/4">
              experience:
            </Typography>
            <Typography className="text-sm text-[#858585] capitalize ms-2 w-2/4">
              {data.experience}
            </Typography>
          </Box>
          <Box className="flex">
            <Typography className="text-sm text-black capitalize w-2/4">
              Job Type:
            </Typography>
            <Typography className="text-sm text-[#858585] capitalize ms-2 w-2/4">
              {data.type}
            </Typography>
          </Box>
          <Box className="flex">
            <Typography className="text-sm text-black capitalize w-2/4">
              location:
            </Typography>
            <Typography className="text-sm text-[#858585] capitalize ms-2 w-2/4">
              {data.location}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        className="flex flex-col items-center justify-center"
      >
        <Box>
          <Typography className="text-lg text-[#9ce9f4] capitalize pb-3.5 text-left">
            description
          </Typography>
          <Typography className="text-xs text-[#858585] w-full md:w-3/4">
            {data.description}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={3}
        className="flex flex-col items-center justify-center"
      >
        <Box>
          <Typography className="text-lg text-[#9ce9f4] capitalize mb-2 text-left">
            keywords
          </Typography>
          <Box className="flex flex-wrap">
            {data.keywords.map((key, i) => (
              <Box
                className="bg-[#e6e6e6] hover:bg-[#37B9CB] py-1 px-3 text-[#5a5a5a] hover:text-white text-xs m-1 rounded-full border hover:border-white border-[#5A5A5A]"
                key={i}
              >
                {key}
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        className="flex items-center justify-center mt-3 md:mt-0"
      >
        <Button
          variant="contained"
          className="text-sm bg-[#37B9CB] capitalize py-2 shadow-none spinnaker"
        >
          Apply Now
        </Button>
      </Grid>
    </Grid>
  );
};

const Hiring = () => {
  return (
    <Box className="w-full h-fit py-10">
      <Box className="w-full h-1/5 flex flex-col items-center justify-center text-center">
        <Typography className="text-xl md:text-3xl text-[#9ce9f4] uppercase mb-2">
          WE ARE HIRING
        </Typography>
        <Typography className="text-3xl md:text-5xl tracking-wide text-[#37b9cb] capitalize">
          Career Opportunities
        </Typography>
      </Box>
      <Box className="w-full h-fit mt-14 flex flex-col items-center">
        {opportunities.map((opp, i) => (
          <Opportunity key={i} data={opp} />
        ))}
        <Box className="flex lg:w-5/6 w-full mt-6 justify-end">
          <Button className="text-white bg-[#37B9CB] text-xs uppercase py-2 w-[80px] mx-2">
            Previous
          </Button>
          {[1, 2, 3].map((key, i) => (
            <Button
              className="bg-white text-black text-xs uppercase py-2 mx-2"
              key={i}
            >
              {key}
            </Button>
          ))}
          <Button className="text-white bg-[#37B9CB] text-xs uppercase py-2 w-[80px] mx-2">
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hiring;
