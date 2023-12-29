import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { webNotifications } from "@/assets/data";
import moment from "moment";

const Notifications = () => {
  return (
    <Box className="w-full min-h-[90vh] h-fit pe-7 py-2 bg-white">
      {webNotifications.map((note, i) => (
        <Box className="w-full h-20 px-5 py-2.5" key={i}>
          <Grid container>
            <Grid item xs={2}>
              <Typography className="poppins text-sm text-[#758CA3] font-semibold capitalize">
                {moment(note.time, "YYYYMMDD").fromNow()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className="poppins text-sm text-[#758CA3] capitalize">
                {note.note}
              </Typography>
            </Grid>
            <Grid item lg={1} md={0} />
            <Grid item xs={3} className="flex items-center">
              <Button
                variant="contained"
                className="button-bg py-2.5 w-28 text-xs rounded-lg shadow-none mx-1"
              >
                Read
              </Button>
              <Button
                variant="contained"
                className="button-grey-bg py-2.5 w-28 text-xs rounded-lg shadow-none mx-1"
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Notifications;
