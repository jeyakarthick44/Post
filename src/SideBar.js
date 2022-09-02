import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  ListItemAvatar,
  Avatar
} from "@mui/material";
import navlinks from "./navlinks";
import MenuIcon from "@mui/icons-material/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import profile from "./images/profile.png";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const drawerWidth = 240;

function SideBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Grid container direction="column" alignItems="center">
        <Grid item pr={3}>
          <List>
            <ListItem
              sx={{ borderBottom: "1px solid whitesmoke" }}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <MenuOpenIcon sx={{ width: 27, height: 27 }} />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <MarkunreadMailboxIcon />
              </ListItemAvatar>
              <ListItemText primary="SmartUp" />
            </ListItem>
            <ListItem
              sx={{ my: 1, borderBottom: "1px solid whitesmoke" }}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <CircleNotificationsIcon
                    sx={{ color: "orangered", width: 27, height: 27 }}
                  />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={profile}
                  sx={{ width: 34, height: 34 }}
                />
              </ListItemAvatar>
              <ListItemText primary="Profile" />
            </ListItem>
            {navlinks.map((navLink) => (
              <ListItem key={navLink.id}>
                <ListItemIcon>{navLink.icon}</ListItemIcon>
                <ListItemText primary={navLink.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
              boxShadow: 4,
              backgroundColor: "#FFFFFF"
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: 4,
              border: "none",
              backgroundColor: "#FFFFFF"
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func
};

export default SideBar;
