import React, { useState, useRef } from "react";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import StyledTextField from "./StyledTextField";
import AntSwitch from "./AntSwitch";
import Image from "next/image";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";
import saveIcon from "@/assets/icons/save.svg";
import pictures from "@/assets/icons/pictures.svg";
import StyledTextarea from "./StyledTextarea";

const BannerCMSCard = ({ banner, setBanner, data }) => {
  const [background, setBackground] = useState({
    url: pictures,
    name: "background.png",
  });
  const hiddenBackgroundInput = useRef(null);
  const handleBackgroundClick = (event) => {
    hiddenBackgroundInput.current.click();
  };

  const handleBackgroundChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBackground({ url: reader.result, name: e.target.files[0].name });
        setBanner({ ...banner, backgroundImage: reader.result });
      }
    };
    reader?.readAsDataURL(e.target.files[0]);
  };
  const [leftImage, setLeftImage] = useState({
    url: pictures,
    name: "background.png",
  });
  const hiddenLeftImageInput = useRef(null);
  const handleLeftImageClick = (event) => {
    hiddenLeftImageInput.current.click();
  };

  const handleLeftImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLeftImage({ url: reader.result, name: e.target.files[0].name });
        setBanner({ ...banner, leftImage: reader.result });
      }
    };
    reader?.readAsDataURL(e.target.files[0]);
  };
  return (
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
          <StyledTextField
            title={"Enter Slide Position"}
            type={"number"}
            value={banner.position}
            setValue={(e) => setBanner({ ...banner, position: e.target.value })}
          />
        </Box>
        <Box className="flex items-center w-2/4 ms-3">
          <Typography className="text-xs text-[#758CA3] poppins capitalize">
            Publish Slide
          </Typography>
          <AntSwitch
            value={banner.publish}
            setValue={(e) =>
              setBanner({ ...banner, publish: e.target.checked })
            }
          />
        </Box>
      </Box>
      <Box className="flex w-full items-center mt-4">
        <Box className="w-2/4 me-3">
          <Typography className="text-xs text-[#758CA3] poppins capitalize">
            Background Image
          </Typography>
          <Box className="mt-2 flex items-center">
            <Image
              src={background.url}
              alt="picture"
              className="w-auto h-10 pe-4 cursor-pointer"
              onClick={handleBackgroundClick}
              width={100}
              height={100}
            />
            <input
              type="file"
              ref={hiddenBackgroundInput}
              accept="image/*"
              onChange={handleBackgroundChange}
              style={{ display: "none" }}
            />
            <StyledTextField value={background.name} readOnly={true} />
          </Box>
        </Box>
        <Box className="w-2/4 ms-3">
          <Typography className="text-xs text-[#758CA3] poppins capitalize">
            Left Image
          </Typography>
          <Box className="mt-2 flex items-center">
            <Image
              src={leftImage.url}
              alt="picture"
              className="w-auto h-10 pe-4 cursor-pointer"
              onClick={handleLeftImageClick}
              width={100}
              height={100}
            />
            <input
              type="file"
              ref={hiddenLeftImageInput}
              accept="image/*"
              onChange={handleLeftImageChange}
              style={{ display: "none" }}
            />
            <StyledTextField value={leftImage.name} readOnly={true} />
          </Box>
        </Box>
      </Box>
      <Box className="flex w-full items-center mt-4">
        <Box className="w-2/4 me-3">
          <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
            Main Title
          </Typography>
          <StyledTextField
            title={"Enter Main Title"}
            value={banner.mainTitle}
            setValue={(e) =>
              setBanner({ ...banner, mainTitle: e.target.value })
            }
          />
        </Box>
        <Box className="w-2/4 ms-3">
          <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
            Subtitle
          </Typography>
          <StyledTextField
            title={"Enter Subtitle"}
            value={banner.subtitle}
            setValue={(e) => setBanner({ ...banner, subtitle: e.target.value })}
          />
        </Box>
      </Box>
      <Box className="w-full mt-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Description
        </Typography>
        <StyledTextarea
          title={"Enter Description"}
          value={banner.description}
          setValue={(e) =>
            setBanner({ ...banner, description: e.target.value })
          }
          height={"100px"}
        />
      </Box>
    </Box>
  );
};

export default BannerCMSCard;
