import React, { useState, useRef } from "react";
import { Grid, Box, Typography, Button, Tabs, Tab, Chip } from "@mui/material";
import PropTypes from "prop-types";
import pictures from "@/assets/icons/pictures.svg";
import Image from "next/image";
import StyledTextField from "./StyledTextField";
import StyledTextarea from "./StyledTextarea";
import TextEditor from "@/components/Management/TextEditor";
import StyledSelect from "./StyledSelect";

const AddCustomer = () => {
  const [image, setImage] = useState("");
  const hiddenFileInput = useRef(null);
  const handleImageClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader?.readAsDataURL(e.target.files[0]);
  };
  // Customer Details
  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
    resource: "",
    gender: "",
    about: "",
    image,
  });
  const genderOptions = ["male", "female", "rather not say"];
  return (
    <Box className="w-full min-h-[90vh] h-fit pe-7 py-5  bg-white">
      <Grid container>
        <Grid item xs={4} className="h-[15.5rem] rounded-lg ">
          <Box className="border flex items-center justify-center h-full mx-8 relative">
            {image ? (
              <Image src={image} alt="picture" fill={true} />
            ) : (
              <>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <Image
                  src={pictures}
                  alt="picture"
                  className="w-auto h-24 cursor-pointer"
                  onClick={handleImageClick}
                />
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
            Full Name
          </Typography>
          <StyledTextField
            title={"Enter Full Name"}
            value={customer.fullName}
            setValue={(e) =>
              setCustomer({ ...customer, fullName: e.target.value })
            }
          />
          <Typography className="text-xs text-[#758CA3] poppins capitalize mt-4 mb-2">
            Email
          </Typography>
          <StyledTextField
            title={"Enter Email"}
            value={customer.email}
            setValue={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
          />
          <Typography className="text-xs text-[#758CA3] poppins capitalize mt-4 mb-2">
            Phone
          </Typography>
          <StyledTextField
            title={"Enter Phone"}
            value={customer.phone}
            setValue={(e) =>
              setCustomer({ ...customer, phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={4} className="flex justify-end">
          <Button
            variant="contained"
            className="button-grey-bg py-3 w-32 h-fit px-4 text-xs rounded-lg shadow-none mx-1"
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={4} className="px-8 mt-4">
          <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
            Resource
          </Typography>
          <StyledTextField
            title={"Enter Resource"}
            value={customer.resource}
            setValue={(e) =>
              setCustomer({ ...customer, resource: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={4} className="mt-4">
          <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
            Gender
          </Typography>
          <StyledSelect
            title={"Select Gender"}
            options={genderOptions}
            width={"w-3/4"}
            value={customer.gender}
            setValue={(e) =>
              setCustomer({ ...customer, gender: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={8} className="ps-8 mt-8">
          <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
            About Client
          </Typography>
          <StyledTextarea
            title={"About Client"}
            height={"170px"}
            value={customer.about}
            setValue={(e) =>
              setCustomer({ ...customer, about: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddCustomer;
