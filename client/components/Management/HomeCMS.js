import React, { useState } from "react";
import { Box, Typography, Button, Tooltip, IconButton } from "@mui/material";
import Image from "next/image";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";
import saveIcon from "@/assets/icons/save.svg";
import BannerCMSCard from "@/components/Management/BannerCMSCard";
import AntSwitch from "@/components/Management/AntSwitch";
import StyledTextField from "@/components/Management/StyledTextField";
import pictures from "@/assets/icons/pictures.svg";
import TextEditor from "@/components/Management/TextEditor";
import { collage } from "@/assets/data";
import { TbEdit } from "react-icons/tb";
import { RiCloseCircleFill } from "react-icons/ri";

const HomeCMS = ({ section }) => {
  return (
    <Box className="w-full h-full">
      {section === "Banner" ? (
        <Banners />
      ) : section === "Services" ? (
        <Services />
      ) : section === "About" ? (
        <About />
      ) : section === "Client Logos" ? (
        <ClientLogos />
      ) : section === "Industries" ? (
        <Industries />
      ) : section === "Client Testimonials" ? (
        <ClientTestimonials />
      ) : section === "Blogs" ? (
        <Blogs />
      ) : (
        section
      )}
    </Box>
  );
};
export default HomeCMS;

const Banners = () => {
  const [card, setCard] = useState({
    position: 0,
    publish: true,
    backgroundImage: "",
    leftImage: "",
    mainTitle: "",
    subtitle: "",
    description: "",
  });
  const [banners, setBanners] = useState([{}]);
  console.log({ card });
  const handleAddSlide = () => {
    let array = banners[0];
    array = card;
    setBanners(() => [{}, array]);
  };
  console.log({ banners });
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Banner Section
          </Typography>
          <AntSwitch />
        </Box>
        <Box className="flex items-center">
          <Button
            variant="contained"
            className="button-grey-bg py-3 w-32 px-4 text-sm rounded-lg shadow-none mx-1"
            onClick={handleAddSlide}
          >
            Add Slide
          </Button>
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
          Banner Details
        </Typography>
      </Box>
      {banners.map((e, i) => (
        <BannerCMSCard data={e} key={i} banner={card} setBanner={setCard} />
      ))}
    </>
  );
};

const Services = () => {
  const serviceHeadCard = (
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
            <Image src={deleteIcon} alt="delete" className="h-4 mr-1 w-auto" />
          </IconButton>
        </Tooltip>
      </Box>
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
      <Box className="w-full mt-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Description
        </Typography>
        <StyledTextField title={"Enter Description"} />
      </Box>
    </Box>
  );
  const [cards, setCards] = useState([1]);
  const serviceCard = (
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
            <Image src={deleteIcon} alt="delete" className="h-4 mr-1 w-auto" />
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
            Image
          </Typography>
          <Box className="mt-2 flex items-center">
            <Image src={pictures} alt="picture" className="w-auto h-10 pe-4" />
            <StyledTextField value={"background.png"} readOnly={true} />
          </Box>
        </Box>
        <Box className="w-2/4 ms-3">
          <Typography className="text-xs text-[#758CA3] poppins capitalize">
            Icon
          </Typography>
          <Box className="mt-2 flex items-center">
            <Image src={pictures} alt="picture" className="w-auto h-10 pe-4" />
            <StyledTextField value={"background.png"} readOnly={true} />
          </Box>
        </Box>
      </Box>
      <Box className="flex w-full items-center mt-4">
        <Box className="w-2/4 me-3">
          <Typography className="text-xs text-[#758CA3] poppins capitalize">
            Service Title
          </Typography>
          <Box className="mt-2 flex items-center">
            <StyledTextField title={"Enter Service Title"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Service Section
          </Typography>
          <AntSwitch />
        </Box>
        <Box className="flex items-center">
          <Button
            variant="contained"
            className="button-grey-bg py-3 w-32 px-4 text-sm rounded-lg shadow-none mx-1"
            onClick={() => setCards((cards) => [Math.random(), ...cards])}
          >
            Add Slide
          </Button>
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
      {serviceHeadCard}
      <Box className="w-full py-7">
        <Typography className="text-base font-semibold text-[#758CA3] poppins capitalize">
          Services
        </Typography>
      </Box>
      {cards.map((card, i) => serviceCard)}
    </>
  );
};

const About = () => {
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show About Section
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
          About Details
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

const ClientLogos = () => {
  const clientHeadCard = (
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
            <Image src={deleteIcon} alt="delete" className="h-4 mr-1 w-auto" />
          </IconButton>
        </Tooltip>
      </Box>
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
  );
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Client Section
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
      {clientHeadCard}
      <Box className="w-full py-7">
        <Typography className="text-base font-semibold text-[#758CA3] poppins capitalize">
          Upload Images
        </Typography>
      </Box>
    </>
  );
};

const Industries = () => {
  const [editOn, setEditOn] = useState("");

  const collageGrid = (
    <div class="parent  rounded-xl hidden md:grid mb-10">
      {collage.map((col, i) => (
        <div
          style={{ backgroundImage: `url(${col.bg.src})` }}
          key={i}
          className={`div${i + 1} collage-bg relative`}
        >
          <Box className="h-full w-full collage-card-bg flex flex-col justify-end items-start p-10 text-white ">
            <Typography className=" uppercase text-lg w-3/5">
              {col.title}
            </Typography>
            <Typography className="uppercase text-lg w-4/5 mt-3">
              {col?.sub}
            </Typography>
          </Box>
          <Box className="absolute top-4 right-4 overflow-visible z-20">
            {editOn !== `div${i + 1}` && (
              <Tooltip title="Edit" className="right-0">
                <IconButton
                  size="medium"
                  onClick={() => setEditOn(`div${i + 1}`)}
                >
                  <TbEdit className="text-white" />
                </IconButton>
              </Tooltip>
            )}
            {editOn === `div${i + 1}` && (
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
                <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
                  Main Title
                </Typography>
                <StyledTextField title={"Enter Main Title"} />
                <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
                  Subtitle
                </Typography>
                <StyledTextField title={"Enter Subtitle"} />
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
  );
  const industriesHeadCard = (
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
            <Image src={deleteIcon} alt="delete" className="h-4 mr-1 w-auto" />
          </IconButton>
        </Tooltip>
      </Box>
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
  );
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Client Section
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
      {industriesHeadCard}
      {collageGrid}
    </>
  );
};

const ClientTestimonials = () => {
  const testimonialsHeadCard = (
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
            <Image src={deleteIcon} alt="delete" className="h-4 mr-1 w-auto" />
          </IconButton>
        </Tooltip>
      </Box>
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
  );
  const [cards, setCards] = useState([1]);
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Client Section
          </Typography>
          <AntSwitch />
        </Box>
        <Box className="flex items-center">
          <Button
            variant="contained"
            className="button-grey-bg py-3 w-32 px-4 text-sm rounded-lg shadow-none mx-1"
            onClick={() => setCards((cards) => [Math.random(), ...cards])}
          >
            Add Slide
          </Button>
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
      {testimonialsHeadCard}
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
                Client Image
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
            <Box className="w-2/4 me-3">
              <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
                Client Name
              </Typography>
              <StyledTextField title={"Enter Main Title"} />
            </Box>
          </Box>
          <Box className="w-full mt-4">
            <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
              Review
            </Typography>
            <StyledTextField title={"Enter Review"} />
          </Box>
        </Box>
      ))}
    </>
  );
};

const Blogs = () => {
  const blogsHeadCard = (
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
            <Image src={deleteIcon} alt="delete" className="h-4 mr-1 w-auto" />
          </IconButton>
        </Tooltip>
      </Box>
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
  );
  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography className="text-sm text-[#758CA3] poppins capitalize">
            Show Blogs Section
          </Typography>
          <AntSwitch />
        </Box>
        <Box className="flex items-center">
          <Button
            variant="contained"
            className="button-grey-bg py-3 w-32 px-4 text-sm rounded-lg shadow-none mx-1"
            onClick={() => setCards((cards) => [Math.random(), ...cards])}
          >
            Add Slide
          </Button>
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
      {blogsHeadCard}
    </>
  );
};
