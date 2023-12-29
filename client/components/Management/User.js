import React from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import member4 from "@/assets/member4.png";
import PropTypes from "prop-types";
import {
  personalInformation,
  employeeInformation,
  bankDetails,
  projects,
  EODHistory,
} from "@/assets/data";
import DownloadIcon from "@mui/icons-material/Download";

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
      {value === index && <Box>{children}</Box>}
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

const User = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="w-full min-h-[90vh] h-fit pe-7 py-2 bg-white">
      <Box className="flex px-8">
        <div
          style={{ backgroundImage: `url(${member4.src})` }}
          className="swiper-bg h-72 w-1/4 rounded-lg"
        >
          <Box className="h-full w-full rounded-lg team-card-bg flex flex-col justify-end items-center p-10 text-white" />
        </div>
        <Box className="w-2/4 ps-6">
          <Box className="flex justify-between items-end">
            <Typography className="poppins text-5xl text-[#758CA3] font-semibold capitalize">
              Moeez Ahmed
            </Typography>
            <Typography className="poppins text-xl text-[#37B9CB] capitalize">
              Admin
            </Typography>
          </Box>
          <Typography className="poppins text-xl text-[#758CA3] capitalize my-5">
            MERN Stack Developer{" "}
            <span className="text-[#D3D3D3]"> - Part Time</span>
          </Typography>
          <Typography className="poppins text-base text-[#758CA3] capitalize">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries.
          </Typography>
        </Box>
        <Box className="w-1/4 ">
          <Button
            variant="contained"
            className="button-grey-bg float-right py-2.5 w-28 text-xs rounded-lg shadow-none mx-1"
          >
            Edit
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }} className="px-8 mt-7">
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
            <Tab
              label="Active Projects"
              className="capitalize poppins"
              {...a11yProps(3)}
            />
            <Tab
              label="EoD History"
              className="capitalize poppins"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel className="pb-20" value={value} index={0}>
          <PersonalDetails />
        </CustomTabPanel>
        <CustomTabPanel className="pb-20" value={value} index={1}>
          <EmployeeDetails />
        </CustomTabPanel>
        <CustomTabPanel className="pb-20" value={value} index={2}>
          <BankDetails />
        </CustomTabPanel>
        <CustomTabPanel className="pb-20" value={value} index={3}>
          <Projects />
        </CustomTabPanel>
        <CustomTabPanel className="pb-20" value={value} index={4}>
          <EOD />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default User;

const PersonalDetails = () => {
  return (
    <Grid container className="text-base text-[#758CA3] ">
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Father Name</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.father}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Phone</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.phone}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Date of Birth</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.dob}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">
          Personal Email Address
        </Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.email}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Gender</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.gender}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">LinkedIn</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.linkedIn}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Address</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.address}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Behance</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {personalInformation.behance}
        </Typography>
      </Grid>
    </Grid>
  );
};

const EmployeeDetails = () => {
  return (
    <Grid container className="text-base text-[#758CA3] ">
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Designation</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.designation}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">
          Personal Github Address
        </Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.perosnalGithub}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Joining Date</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.joining}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Work Github Address</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.workGithub}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Job Mode</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.jobMode}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Work Email Address</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.workEmail}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Job Type</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.jobType}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Salary</Typography>
        <Typography className="w-2/4 poppins text-sm">
          {employeeInformation.salary}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Skills</Typography>
        <Typography className="w-2/4 poppins text-sm capitalize pe-7">
          {employeeInformation.skills}
        </Typography>
      </Grid>
      <Grid item xs={6} className="flex h-fit mt-5">
        <Typography className="w-2/4 poppins text-sm">Resume</Typography>
        <Box className="w-2/4 poppins text-sm">
          <a
            href={employeeInformation.resume}
            download={"Resume"}
            target="_blank"
            className="flex items-center text-white w-fit py-2 bg-[#0893af] rounded-full px-3"
          >
            <DownloadIcon className="text-xl me-2" />
            <Typography className="text-sm">Resume</Typography>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
};

const BankDetails = () => {
  return (
    <Grid container className="text-base text-[#758CA3] ">
      <Grid item xs={12} className="flex h-fit mt-5">
        <Typography className="w-1/4 poppins text-sm">Bank Name</Typography>
        <Typography className="w-1/4 poppins text-sm">{bankDetails.bank}</Typography>
      </Grid>
      <Grid item xs={12} className="flex h-fit mt-5">
        <Typography className="w-1/4 poppins text-sm">Account Title</Typography>
        <Typography className="w-1/4 poppins text-sm">{bankDetails.title}</Typography>
      </Grid>
      <Grid item xs={12} className="flex h-fit mt-5">
        <Typography className="w-1/4 poppins text-sm">IBAN</Typography>
        <Typography className="w-1/4 poppins text-sm">{bankDetails.iban}</Typography>
      </Grid>
      <Grid item xs={12} className="flex h-fit mt-5">
        <Typography className="w-1/4 poppins text-sm">Account Number</Typography>
        <Typography className="w-1/4 poppins text-sm">{bankDetails.account}</Typography>
      </Grid>
    </Grid>
  );
};

const Projects = () => {
  return (
    <TableContainer className="w-full mt-4">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-[#758CA3] font-semibold poppins w-24 text-sm border-b-0">
              Task ID
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 w-40">
              Project Name
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 w-[25rem]">
              Task Summary
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 w-fit">
              Task Status
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 px-1">
              Deadline
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects
            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, i) => (
              <TableRow key={i}>
                <TableCell
                  component="th"
                  scope="row"
                  className="text-xs border-b-0 text-[#758CA3] poppins"
                >
                  {row.id}
                </TableCell>
                <TableCell className="text-xs border-b-0 text-[#758CA3] poppins">
                  {row.name}
                </TableCell>
                <TableCell className="text-xs border-b-0 capitalize text-[#758CA3] poppins">
                  {row.summary}
                </TableCell>
                <TableCell className="border-b-0 text-[#758CA3] poppins">
                  <Typography className="text-xs  w-32 truncate">
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-xs border-b-0 text-[#758CA3] poppins"
                  align="center"
                >
                  {row.deadline}
                </TableCell>
                <TableCell className="text-xs border-b-0 text-[#758CA3] poppins">
                  <Button
                    variant="contained"
                    className="button-grey-bg py-2 w-28 c capitalize text-xs rounded-lg shadow-none mx-1"
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const EOD = () => {
  return (
    <TableContainer className="w-full mt-4">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-[#758CA3] font-semibold poppins w-24 text-sm border-b-0">
              Date
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins w-24 text-sm border-b-0">
              Task ID
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 w-40">
              Project Name
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 w-[25rem]">
              Task Summary
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 w-fit">
              Task Status
            </TableCell>
            <TableCell className="text-[#758CA3] font-semibold poppins text-sm border-b-0 px-1">
              Deadline
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {EODHistory
            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, i) => (
              <TableRow key={i}>
                <TableCell
                  component="th"
                  scope="row"
                  className="text-xs border-b-0 text-[#758CA3] poppins"
                >
                  {row.date}
                </TableCell>
                <TableCell className="text-xs border-b-0 text-[#758CA3] poppins">
                  {row.id}
                </TableCell>
                <TableCell className="text-xs border-b-0 text-[#758CA3] poppins">
                  {row.name}
                </TableCell>
                <TableCell className="text-xs border-b-0 capitalize text-[#758CA3] poppins">
                  {row.summary}
                </TableCell>
                <TableCell className="border-b-0 text-[#758CA3] poppins">
                  <Typography className="text-xs  w-32 truncate">
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-xs border-b-0 text-[#758CA3] poppins"
                  align="center"
                >
                  {row.deadline}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
