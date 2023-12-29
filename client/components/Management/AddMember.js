import React, { useState, useRef } from "react";
import { Grid, Box, Typography, Button, Tabs, Tab, Chip } from "@mui/material";
import PropTypes from "prop-types";
import pictures from "@/assets/icons/pictures.svg";
import Image from "next/image";
import StyledTextField from "./StyledTextField";
import StyledTextarea from "./StyledTextarea";
import TextEditor from "@/components/Management/TextEditor";
import StyledSelect from "./StyledSelect";

const AddMember = () => {
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
  const handleImageRemove = (image) => {
    setImage("");
  };

  // Personal Details
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    about: "",
    father: "",
    phone: "",
    dob: "",
    personalEmail: "",
    gender: "",
    linkedIn: "",
    address: "",
    behance: "",
    profile: image,
  });
  // Employee Details
  const [employee, setEmployee] = useState({
    designation: "",
    personalGithub: "",
    joiningDate: "",
    workGithub: "",
    jobType: "",
    workEmail: "",
    jobMode: "",
    salary: "",
    accountType: "",
    resume: "",
    skills: "",
  });
  // Bank Details
  const [bank, setBank] = useState({
    bankName: "",
    accountTitle: "",
    iban: "",
    accountNumber: "",
  });
  return (
    <Box className="w-full min-h-[90vh] h-fit pe-7 py-2  bg-white">
      <Grid container>
        <Grid item xs={4} className="h-80 rounded-lg ">
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
            First Name
          </Typography>
          <StyledTextField
            title={"Enter First Name"}
            value={personal.firstName}
            setValue={(e) =>
              setPersonal({ ...personal, firstName: e.target.value })
            }
          />
          <Typography className="text-xs text-[#758CA3] poppins capitalize mt-4 mb-2">
            Last Name
          </Typography>
          <StyledTextField
            title={"Enter Last Name"}
            value={personal.lastName}
            setValue={(e) =>
              setPersonal({ ...personal, lastName: e.target.value })
            }
          />
          <Typography className="text-xs text-[#758CA3] poppins capitalize mt-4 mb-2">
            About Yourself
          </Typography>
          <StyledTextarea
            title={"Enter About Yourself"}
            value={personal.about}
            setValue={(e) =>
              setPersonal({ ...personal, about: e.target.value })
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
      </Grid>
      <CustomerTabs
        personal={personal}
        setPersonal={setPersonal}
        employee={employee}
        setEmployee={setEmployee}
        bank={bank}
        setBank={setBank}
      />
    </Box>
  );
};

export default AddMember;

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
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
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

function CustomerTabs({
  personal,
  setPersonal,
  employee,
  setEmployee,
  bank,
  setBank,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4, px: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Personal Details"
            className="capitalize poppins"
            {...a11yProps(0)}
          />
          <Tab
            label="Employee Details"
            className="capitalize poppins"
            {...a11yProps(1)}
          />
          <Tab
            label="Bank Account Details"
            className="capitalize poppins"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PersonalDetails personal={personal} setPersonal={setPersonal} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EmployeeDetails employee={employee} setEmployee={setEmployee} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BankDetails bank={bank} setBank={setBank} />
      </CustomTabPanel>
    </Box>
  );
}

const PersonalDetails = ({ personal, setPersonal }) => {
  const genderOptions = ["male", "female", "rather not say"];
  return (
    <Grid container>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Father Name
        </Typography>
        <StyledTextField
          title={"Enter Father Name"}
          width={"w-3/4"}
          value={personal.father}
          setValue={(e) => setPersonal({ ...personal, father: e.target.value })}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Phone Number
        </Typography>
        <StyledTextField
          title={"Enter Phone Number"}
          width={"w-3/4"}
          value={personal.phone}
          setValue={(e) => setPersonal({ ...personal, phone: e.target.value })}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Date of Birth
        </Typography>
        <StyledTextField
          title={"Enter Date of Birth"}
          width={"w-3/4"}
          type={"date"}
          value={personal.dob}
          setValue={(e) => setPersonal({ ...personal, dob: e.target.value })}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Personal Email Address
        </Typography>
        <StyledTextField
          title={"Enter Personal Email Address"}
          width={"w-3/4"}
          value={personal.personalEmail}
          setValue={(e) =>
            setPersonal({ ...personal, personalEmail: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Gender
        </Typography>
        <StyledSelect
          title={"Select Gender"}
          options={genderOptions}
          width={"w-3/4"}
          value={personal.gender}
          setValue={(e) => setPersonal({ ...personal, gender: e.target.value })}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          LinkedIn
        </Typography>
        <StyledTextField
          title={"Enter LinkedIn"}
          width={"w-3/4"}
          value={personal.linkedIn}
          setValue={(e) =>
            setPersonal({ ...personal, linkedIn: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Address
        </Typography>
        <StyledTextField
          title={"Enter Address"}
          width={"w-3/4"}
          value={personal.address}
          setValue={(e) =>
            setPersonal({ ...personal, address: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Behance
        </Typography>
        <StyledTextField
          title={"Enter Behance"}
          width={"w-3/4"}
          value={personal.behance}
          setValue={(e) =>
            setPersonal({ ...personal, behance: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

const EmployeeDetails = ({ employee, setEmployee }) => {
  const [resume, setResume] = useState("");
  const hiddenFileInput = useRef(null);
  const handleResumeClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
    setEmployee({ ...employee, resume });
  };
  const jobTypeOptions = ["Part Time", "Full Time", "Contract"];
  const jobModeOptions = ["On Site", "Remote", "Hybrid"];
  const accountTypeOptions = ["Manager", "Employee"];
  return (
    <Grid container className="pb-16">
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Designation
        </Typography>
        <StyledTextField
          title={"Enter Designation"}
          width={"w-3/4"}
          value={employee.designation}
          setValue={(e) =>
            setEmployee({ ...employee, designation: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Personal Github Address
        </Typography>
        <StyledTextField
          title={"Enter Personal Github Address"}
          width={"w-3/4"}
          value={employee.personalGithub}
          setValue={(e) =>
            setEmployee({ ...employee, personalGithub: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Joining Date
        </Typography>
        <StyledTextField
          title={"Enter Joining Date"}
          width={"w-3/4"}
          type={"date"}
          value={employee.joiningDate}
          setValue={(e) =>
            setEmployee({ ...employee, joiningDate: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Work Github Address
        </Typography>
        <StyledTextField
          title={"Enter Work Github Address"}
          width={"w-3/4"}
          value={employee.workGithub}
          setValue={(e) =>
            setEmployee({ ...employee, workGithub: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Job Type
        </Typography>
        <StyledSelect
          title={"Enter Job Type"}
          width={"w-3/4"}
          value={employee.jobType}
          setValue={(e) =>
            setEmployee({ ...employee, jobType: e.target.value })
          }
          options={jobTypeOptions}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Work Email Address
        </Typography>
        <StyledTextField
          title={"Enter Work Email Address"}
          width={"w-3/4"}
          value={employee.workEmail}
          setValue={(e) =>
            setEmployee({ ...employee, workEmail: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Job Mode
        </Typography>
        <StyledSelect
          title={"Enter Job Mode"}
          width={"w-3/4"}
          value={employee.jobMode}
          setValue={(e) =>
            setEmployee({ ...employee, jobMode: e.target.value })
          }
          options={jobModeOptions}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Salary
        </Typography>
        <StyledTextField
          title={"Enter Salary"}
          width={"w-3/4"}
          value={employee.salary}
          setValue={(e) => setEmployee({ ...employee, salary: e.target.value })}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Account Type
        </Typography>
        <StyledSelect
          title={"Enter Account Type"}
          width={"w-3/4"}
          value={employee.accountType}
          setValue={(e) =>
            setEmployee({ ...employee, accountType: e.target.value })
          }
          options={accountTypeOptions}
        />
      </Grid>
      <Grid item xs={6} className="mb-4">
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Upload Resume
        </Typography>
        <Box className="flex items-center h-14">
          <Button
            variant="contained"
            className="button-grey-bg py-3 h-fit px-4 text-xs capitalize rounded-lg shadow-none mx-1"
            onClick={handleResumeClick}
          >
            Upload Resume
          </Button>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleResumeChange}
            style={{ display: "none" }}
          />
          <Chip
            label={resume.name || "No uploaded resume"}
            onDelete={() => setResume("")}
            className="ml-6 bg-[#B8EEF5] text-[#758CA3]"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography className="text-xs text-[#758CA3] poppins capitalize mb-2">
          Skills
        </Typography>
        <TextEditor
          value={employee.skills}
          setValue={(newContent) =>
            setEmployee({ ...employee, skills: newContent })
          }
        />
      </Grid>
    </Grid>
  );
};

const BankDetails = ({ bank, setBank }) => {
  return (
    <Grid container className="text-base text-[#758CA3] ">
      <Grid item xs={12} className=" h-fit">
        <Typography className="text-xs mb-1.5 poppins">Bank Name</Typography>
        <StyledTextField
          title={"Enter Bank Name"}
          width={"w-2/5"}
          value={bank.bankName}
          setValue={(e) => setBank({ ...bank, bankName: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} className=" h-fit mt-5">
        <Typography className="text-xs mb-1.5 poppins">
          Account Title
        </Typography>
        <StyledTextField
          title={"Enter Account Title"}
          width={"w-2/5"}
          value={bank.accountTitle}
          setValue={(e) => setBank({ ...bank, accountTitle: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} className=" h-fit mt-5">
        <Typography className="text-xs mb-1.5 poppins">IBAN</Typography>
        <StyledTextField
          title={"Enter IBAN Number"}
          width={"w-2/5"}
          value={bank.iban}
          setValue={(e) => setBank({ ...bank, iban: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} className=" h-fit mt-5">
        <Typography className="text-xs mb-1.5 poppins">
          Account Number
        </Typography>
        <StyledTextField
          title={"Enter Account Number"}
          width={"w-2/5"}
          value={bank.accountNumber}
          setValue={(e) => setBank({ ...bank, accountNumber: e.target.value })}
        />
      </Grid>
    </Grid>
  );
};
