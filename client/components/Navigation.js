import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import MobileDrawer from "./MobileDrawer";
import Image from "next/image";
// Asset
import techsyhub from "@/assets/logo.svg";
import Link from "next/link";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Career",
    link: "/career",
  },
];

function Navigation({route}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        className="shadow-none "
        sx={{ background: { xs: "#3ba8b6", sm: "rgba(59, 169, 184, 0.85)" } }}
      >
        <Toolbar className="px-2 md:px-10 lg:px-16 justify-between h-20 items-center">
          <Box className="flex items-center">
            <Link href="/">
              <Image src={techsyhub} alt="TechsyHub" className="w-36" />
            </Link>
            {/* Nav for Big Screen */}
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className="gap-x-4 ps-8"
            >
              {pages.map((page, i) => (
                <Link
                  href={page.link}
                  key={i}
                  className={`h-20 flex items-center page-nav ${route === page.link && "page-active"}`}
                >
                  <Button
                    sx={{
                      color: "white",
                      display: "block",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                    }}
                    className="text-base poppins"
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
          <Box className="flex items-center justify-between">
            <Button className="items-center justify-between text-white hidden md:flex">
              <TfiHeadphoneAlt className="text-2xl md:text-4xl mr-2" />
              <Typography className="flex flex-wrap w-20 capitalize text-xs md:text-sm text-left poppins">
                Ask any questions
              </Typography>
            </Button>
            <Button className=" text-white">
              <SearchIcon className="text-3xl" />
            </Button>
            {/* Nav for Mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" }, width: "33%" }}>
              <MobileDrawer pages={pages} />
            </Box>
            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon className="text-3xl" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <Link key={i} href={page.link}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box> */}
            <Link href={"/contact"}>
              <Button
                className="ml-2 border-white hidden md:block py-3 px-6 rounded-lg text-white poppins"
                variant="outlined"
              >
                Get Quote
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className="p-2 md:px-10 lg:px-16 justify-between flex md:hidden bg-[#4eb0bd] h-15">
        <Button className="items-center justify-between text-white flex">
          <SupportAgentIcon className="text-2xl md:text-4xl mr-2" />
          <Typography className="flex flex-wrap w-20 capitalize text-xs md:text-sm text-left poppins">
            Ask any questions
          </Typography>
        </Button>
        <Button
          className="ml-2 border-white text-white poppins"
          variant="outlined"
        >
          Get Quote
        </Button>
      </Box>
    </>
  );
}
export default Navigation;
