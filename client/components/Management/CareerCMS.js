import React, { useState } from "react";
import { Box, Typography, Button, Tooltip, IconButton } from "@mui/material";
import Image from "next/image";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";
import saveIcon from "@/assets/icons/save.svg";
import AntSwitch from "@/components/Management/AntSwitch";
import StyledTextField from "@/components/Management/StyledTextField";
import pictures from "@/assets/icons/pictures.svg";
import TextEditor from "@/components/Management/TextEditor";
import { careerCollage } from "@/assets/data";
import { TbEdit } from "react-icons/tb";
import { RiCloseCircleFill } from "react-icons/ri";

const CareerCMS = () => {
  const [editOn, setEditOn] = useState("");
  const [cards, setCards] = useState([1]);
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Career Section
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
      <Box className="w-full flex items-center justify-between py-7">
        <Typography className="text-base font-semibold text-[#758CA3] poppins capitalize">
          Gallery Images
        </Typography>
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Gallery Section
          </Typography>
          <AntSwitch />
        </Box>
      </Box>
      <div class="career h-[90vh] hidden md:grid">
        {careerCollage.map((col, i) => (
          <div
            className={`career${
              i + 1
            } bg-cover bg-no-repeat m-2 rounded-md relative`}
            key={i}
            style={{ backgroundImage: `url(${col.src})` }}
          >
            <Box className="absolute top-8 right-2 overflow-visible z-20">
              {editOn !== `career${i + 1}` && (
                <Tooltip title="Edit" className="right-0">
                  <IconButton
                    size="medium"
                    onClick={() => setEditOn(`career${i + 1}`)}
                  >
                    <TbEdit className="text-white" />
                  </IconButton>
                </Tooltip>
              )}
              {editOn === `career${i + 1}` && (
                <Box className="bg-white rounded-xl h-fit w-72 shadow-lg z-30 relative p-5">
                  <IconButton
                    size="medium"
                    onClick={() => setEditOn("")}
                    className="absolute top-2 right-3"
                  >
                    <RiCloseCircleFill className="text-[#0294aa]" />
                  </IconButton>
                  <Typography className="text-xs text-[#758CA3] poppins capitalize pt-4">
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
                  <Button
                    variant="contained"
                    className="button-bg py-3 w-full text-sm rounded-lg shadow-none"
                  >
                    Save
                  </Button>
                </Box>
              )}
            </Box>
          </div>
        ))}
      </div>
      <Box className="w-full py-7 flex items-center justify-between">
        <Typography className="text-base font-semibold text-[#758CA3] poppins capitalize">
          Team Header Details
        </Typography>
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Team Section
          </Typography>
          <AntSwitch />
        </Box>
      </Box>
      <Box className="w-full h-fit cms-card p-5 relative mb-10">
        <Box className="flex w-full items-center mt-4">
          <Box className="w-2/4 me-3">
            <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
              Main Title
            </Typography>
            <StyledTextField title={"Enter Main Title"} />
          </Box>
          <Box className="w-2/4 ms-3">
            <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
              Subtitle
            </Typography>
            <StyledTextField title={"Enter Subtitle"} />
          </Box>
        </Box>
      </Box>
      <Box className="w-full py-7 flex items-center justify-between">
        <Typography className="text-base font-semibold text-[#758CA3] poppins capitalize">
          Core Team Details
        </Typography>
        <Button
          variant="contained"
          className="button-grey-bg py-3 w-fit poppins capitalize px-4 text-sm rounded-lg shadow-none mx-1"
          onClick={() => setCards((cards) => [Math.random(), ...cards])}
        >
          Add Member
        </Button>
      </Box>
      {cards.map((card, i) => (
        <Box className="w-full h-fit cms-card p-5 relative mb-10" key={i}>
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
          <Box className="flex items-center">
            <Box className="flex items-center w-2/4 me-3">
              <Typography className="text-xs text-[#758CA3] poppins capitalize">
                Slide Position
              </Typography>
              <StyledTextField title={"Enter Slide Position"} />
            </Box>
            <Box className="flex items-center w-2/4 ms-3">
              <Typography className="text-xs text-[#758CA3] poppins capitalize">
                Publish Slide
              </Typography>
              <AntSwitch />
            </Box>
          </Box>
          <Box className="flex w-full items-center mt-4">
            <Box className="w-2/4 me-3">
              <Typography className="text-xs text-[#758CA3] poppins capitalize">
                Background Image
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
            <Box className="w-2/4 ms-3">
              <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
                Name
              </Typography>
              <StyledTextField title={"Enter Name"} />
            </Box>
          </Box>
          <Box className="flex w-full items-center mt-4">
            <Box className="w-2/4 me-3">
              <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
                Main Title
              </Typography>
              <StyledTextField title={"Enter Main Title"} />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CareerCMS;
