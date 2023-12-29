"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import techsyhub from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { routes, webNotifications } from "@/assets/data";
import { Tooltip } from "@mui/material";
import bell from "@/assets/icons/bell.svg";
import user from "@/assets/icons/user.svg";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ children, title, id }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className="poppins shadow-none"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar className="flex justify-between items-center">
          <Box className="flex items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }), color: "#37B9CB" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className="text-[#758CA3] poppins capitalize"
              noWrap
              component="div"
            >
              {title} {id && id}
            </Typography>
          </Box>
          <Box>
            <Tooltip title="Notifications" className="mr-2">
              <Link
                href={{
                  pathname: "/management",
                  query: { route: "notifications" },
                }}
              >
                <IconButton>
                  <Badge
                    badgeContent={webNotifications.length}
                    color="primary"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#0893af",
                      },
                    }}
                  >
                    <Image
                      src={bell}
                      alt="notifications"
                      className="h-6 w-auto"
                    />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="User">
              <Link
                href={{
                  pathname: "/management",
                  query: { route: "user" },
                }}
              >
                <IconButton>
                  <Image src={user} alt="user" className="h-6 w-auto" />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        className="bg-[#F9FEFF]"
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className="flex justify-between items-center">
          <Link href="/" className="ms-4">
            <Image src={techsyhub} alt="TechsyHub" className="w-32" />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List className="mt-4" disablePadding>
          {routes.map((text, index) => (
            <Link href={text.route} key={index}>
              <ListItem className="pb-1">
                <ListItemButton
                  className={`rounded-lg ${
                    title === text.title.toLowerCase()
                      ? "list-btn-active"
                      : "list-btn"
                  } text-[#758CA3] min-w-0 py-0`}
                >
                  <ListItemIcon
                    className="text-xl text-inherit min-w-fit mr-3"
                    sx={{
                      minWidth: "fit-content !important",
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.title}
                    sx={{
                      "& .css-10hburv-MuiTypography-root": {
                        fontFamily: "Poppins, sans-serif",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Box className="w-full h-16" />
        {children}
      </Main>
    </Box>
  );
}
