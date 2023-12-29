import React from "react";
import { Box, Typography, Button, Tooltip, IconButton } from "@mui/material";
import Image from "next/image";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";
import saveIcon from "@/assets/icons/save.svg";
import AntSwitch from "@/components/Management/AntSwitch";
import StyledTextField from "@/components/Management/StyledTextField";
import pictures from "@/assets/icons/pictures.svg";
import TextEditor from "@/components/Management/TextEditor";

const BlogCMS = () => {
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Blog Section
          </Typography>
          <AntSwitch />
        </Box>
        <Box className="flex items-center">
          <Button
            variant="contained"
            className="button-bg py-3 px-4 w-32 text-sm rounded-lg shadow-none mx-1"
          >
            Save
          </Button>
        </Box>
      </Box>
      <Box className="w-full py-7">
        <Typography className="text-base font-semibold text-[#758CA3] poppins capitalize">
          Main Header Details
        </Typography>
      </Box>
      <Box className="w-full h-fit cms-card p-5 relative mb-10">
        <Box className="flex items-center absolute top-4 right-4">
          <Tooltip title="Save">
            <IconButton size="small">
              <Image src={saveIcon} alt="eye" className="h-4 mr-1 w-auto" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton size="small">
              <Image src={editIcon} alt="Edit" className="h-4 mr-1 w-auto" />
            </IconButton>
          </Tooltip>
          <Tooltip title="delete">
            <IconButton size="small">
              <Image
                src={deleteIcon}
                alt="delete"
                className="h-4 mr-1 w-auto"
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className="flex w-full items-center mt-4">
          <Box className="w-2/4 me-3">
            <Typography className="text-xs text-[#758CA3] poppins capitalize">
              Image
            </Typography>
            <Box className="mt-2 flex items-center">
              <Image
                src={pictures}
                alt="picture"
                className="w-auto h-10 pe-4"
              />
              <StyledTextField value={"background.png"} readOnly={true} />
            </Box>
          </Box>
        </Box>
        <Box className="flex w-full items-center mt-4">
          <Box className="w-2/4 me-3">
            <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
              Main Title
            </Typography>
            <StyledTextField title={"Enter Main Title"} />
          </Box>
          <Box className="w-2/4 me-3">
            <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
              Subtitle
            </Typography>
            <StyledTextField title={"Enter  Subtitle"} />
          </Box>
        </Box>
        <Box className="w-full my-4">
          <Typography className="text-xs text-[#758CA3] poppins capitalize -mb-4">
            Description
          </Typography>
          <TextEditor />
        </Box>
      </Box>
    </>
  );
};

export default BlogCMS;
