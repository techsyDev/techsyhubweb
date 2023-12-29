import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, Tab, Tabs, Grid } from "@mui/material";
import StyledTextField from "./StyledTextField";
import PropTypes from "prop-types";
import member4 from "@/assets/member4.png";
import { messages } from "@/assets/data";
import TextEditor from "./TextEditor";

const Inquiry = () => {
  return (
    <Box className="w-full min-h-[90vh] h-fit px-7 py-5  bg-white">
      <Box className="h-fit w-full flex justify-between items-center">
        <Box className="flex  items-center">
          <Box>
            <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
              Inquiry Status
            </Typography>
            <StyledTextField title={"Update Inquiry Status"} />
          </Box>
          <Box className="ps-10">
            <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
              Assign Inquiry
            </Typography>
            <StyledTextField title={"Select Team Member"} />
          </Box>
        </Box>
        <Button
          variant="contained"
          className="button-grey-bg py-3 w-32 h-fit px-4 text-xs rounded-lg shadow-none mx-1"
        >
          Save
        </Button>
      </Box>
      <InquiryTabs />
    </Box>
  );
};

export default Inquiry;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function InquiryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Inquiry Details"
            className="poppins text-sm capitalize"
            {...a11yProps(0)}
          />
          <Tab
            label="Conversation"
            className="poppins text-sm capitalize"
            {...a11yProps(1)}
          />
          <Tab
            label="Customer Details"
            className="poppins text-sm capitalize"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <InquiryDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Conversation />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CustomerDetails />
      </CustomTabPanel>
    </Box>
  );
}

const InquiryDetails = () => {
  return (
    <Box className="w-full h-fit pt-3 pb-14 text-[#758CA3]">
      <Typography className="poppins text-lg ">Subject</Typography>
      <Typography className="poppins text-sm ">
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book
      </Typography>
      <Typography className="poppins text-lg pt-5">Project Budget</Typography>
      <StyledTextField title={"Auto Populated"} />
      <Typography className="poppins text-lg pt-5">Initial Message</Typography>
      <Typography className="poppins text-sm pt-5 capitalize">
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentiallywhen an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentiallywhen an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentiallywhen an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentiallywhen an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially.
        <br />
        <br />
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentiallywhen an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentiallywhen an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentiallywhen an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentiallywhen an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially.
      </Typography>
    </Box>
  );
};

const CustomerDetails = () => {
  return (
    <Box className="pt-3 pb-10">
      <Box className="flex pb-8">
        <div
          style={{ backgroundImage: `url(${member4.src})` }}
          className="swiper-bg h-72 w-1/4 rounded-lg"
        >
          <Box className="h-full w-full rounded-lg team-card-bg flex flex-col justify-end items-center p-10 text-white" />
        </div>
        <Box className="w-3/4 ps-6">
          <Typography className="poppins text-5xl text-[#758CA3] font-semibold capitalize">
            Moeez Ahmed
          </Typography>
          <Grid container className="text-base text-[#758CA3] ">
            <Grid item xs={12} className="flex h-fit mt-5">
              <Typography className="w-1/4 poppins text-sm">
                Active Projects
              </Typography>
              <Typography className="w-1/4 poppins text-sm">2</Typography>
            </Grid>
            <Grid item xs={12} className="flex h-fit mt-5">
              <Typography className="w-1/4 poppins text-sm">
                Email Address
              </Typography>
              <Typography className="w-1/4 poppins text-sm">
                techsyhub@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} className="flex h-fit mt-5">
              <Typography className="w-1/4 poppins text-sm">Phone</Typography>
              <Typography className="w-1/4 poppins text-sm">
                +92-143-023-9230
              </Typography>
            </Grid>
            <Grid item xs={12} className="flex h-fit mt-5">
              <Typography className="w-1/4 poppins text-sm">Gender</Typography>
              <Typography className="w-1/4 poppins text-sm">Male</Typography>
            </Grid>
            <Grid item xs={12} className="flex h-fit mt-5">
              <Typography className="w-1/4 poppins text-sm">Address</Typography>
              <Typography className="w-1/4 poppins text-sm">
                Karachi, Pakistan
              </Typography>
            </Grid>
            <Grid item xs={12} className="flex h-fit mt-5">
              <Typography className="w-1/4 poppins text-sm">
                Resource
              </Typography>
              <Typography className="w-1/4 poppins text-sm">
                LinkedIn
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography className="capitalize poppins text-sm text-[#758CA3]">
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially.
        <br />
        <br />
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book
        <br />
        <br />
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially
      </Typography>
    </Box>
  );
};

const Conversation = () => {
  const MessageBox = ({ message }) => {
    const [more, setMore] = useState(false);
    return (
      <Box
        className={`flex flex-col items-${
          message.user === false ? "start" : "end"
        } mb-5`}
      >
        <Box
          className={`max-w-[80%] w-fit p-5 rounded-2xl ${
            !more && "max-h-60"
          }  min-h-fit text-[#758CA3] bg-[#defcff] `}
        >
          <Typography
            className={`${
              !more && "message-ellipsis"
            } capitalize poppins text-sm`}
          >
            {message.message}
          </Typography>
          {message.message.length > 550 && (
            <Button
              className="text-sm text-[#3BA9B8] py-0 poppins ps-0"
              onClick={() => setMore(!more)}
            >
              Read {more ? "Less" : "More"}
            </Button>
          )}
        </Box>
        <Box
          className={`h-fit w-4/5 flex items-center justify-${
            message.user === false ? "start" : "end"
          } text-[#758CA3] ps-5 pt-2`}
        >
          <Typography className="text-sm poppins">
            Sent By {message.sender} - {message.designation}
          </Typography>
          <Typography className="text-sm poppins ms-6 capitalize">
            {message.time}
          </Typography>
        </Box>
      </Box>
    );
  };
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    // Scroll to the bottom of the div
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };
  return (
    <Box className="h-[150vh] w-full py-3">
      <Box className="h-full w-[70%] px-4 py-6 bg-[#F5FEFF] rounded-sm ">
        <Box
          ref={scrollableDivRef}
          className="hide-scroll  overflow-x-auto w-full h-screen"
        >
          {messages.map((message, i) => (
            <MessageBox message={message} key={i} />
          ))}
        </Box>
        <Box className="bg-white h-44">
          <TextEditor height={"h-32"} />
        </Box>
        <Box className="flex justify-end">
          <Button
            variant="contained"
            className="button-bg py-2.5 px-5 text-sm rounded-lg shadow-none mt-3"
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
