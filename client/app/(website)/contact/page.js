import React from "react";
import { Box } from "@mui/material";
import contactbg from "@/assets/contactbg.jpg";
import { Contact as Form } from "@/components/Contact.js";

const Contact = () => {
  return (
    <Box
      className="w-full min-h-[180vh] bg-cover bg-center bg-no-repeat flex justify-center items-center px-3 py-10 md:px-12 md:pt-40 md:pb-14 lg:pt-16 lg:pb-0"
      sx={{ backgroundImage: `url(${contactbg.src})` }}
    >
      <Box className="w-full h-fit contact-bg pt-6">
        <Form white={true} head={true} px={true} />
      </Box>
    </Box>
  );
};

export default Contact;
