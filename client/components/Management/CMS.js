import React, { useState } from "react";
import { Box, Button, Typography, Tabs, Tab } from "@mui/material";
import { cmsPages } from "@/assets/data";
import PropTypes from "prop-types";
import HomeCMS from "./HomeCMS";
import ContactCMS from "./ContactCMS";
import BlogCMS from "./BlogCMS";
import CareerCMS from "./CareerCMS";

// Tab Panel
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

const CMS = () => {
  const [page, setPage] = useState(0);
  const [section, setSection] = useState("Banner");
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };
  return (
    <Box className="w-full flex min-h-[90vh] h-fit pe-7 py-2  bg-white">
      {cmsPages[page]?.sections && (
        <Box className="w-1/5 h-full bg-[#F9FEFF] p-6">
          <Typography className="text-sm font-semibold text-[#758CA3] poppins uppercase">
            Sections
          </Typography>
          <Box className="pt-8 flex flex-col">
            {cmsPages[page].sections.map((sect, i) => (
              <Button
                key={i}
                onClick={() => setSection(sect)}
                className={`text-sm w-fit ${
                  section === sect ? "text-[#37B9CB]" : "text-[#758CA3]"
                } poppins capitalize mb-4 cursor-pointer text-left`}
              >
                {sect}
              </Button>
            ))}
          </Box>
        </Box>
      )}
      <Box className="w-[80%] h-full">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={page}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {cmsPages.map((page, i) => (
              <Tab
                label={page.page}
                className="text-[#758CA3] capitalize poppins"
                {...a11yProps(i)}
                key={i}
              />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={page} index={0}>
          <HomeCMS section={section} />
        </CustomTabPanel>
        <CustomTabPanel value={page} index={1}>
          <ContactCMS section={section} />
        </CustomTabPanel>
        <CustomTabPanel value={page} index={2}>
          <BlogCMS section={section} />
        </CustomTabPanel>
        <CustomTabPanel value={page} index={3}>
          <CareerCMS section={section} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default CMS;
