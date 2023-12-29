import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  ListItem,
} from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

function MobileDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [openBrand, setOpenBrand] = useState(false);

  const handleClickBrand = () => {
    setOpenBrand(!openBrand);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins, san-serif", fontWeight: "bold" }}
        >
          Menu
        </Typography>
      </Toolbar>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        {props.pages?.map((page, i) => (
          <>
            <Link
              href={page.link}
              key={i}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleDrawerToggle}
            >
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Poppins, san-serif !important",
                    fontWeight: "bold",
                  }}
                >
                  {page.title}
                </Typography>
              </ListItem>
            </Link>
            <Divider sx={{ marginY: "6px" }} />
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        onClick={handleDrawerToggle}
        size="large"
        sx={{ display: { md: "none" }, padding: 0 }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
    </Box>
  );
}

MobileDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MobileDrawer;
