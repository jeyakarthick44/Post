import React from "react";
import DashboardCustomizeSharpIcon from "@mui/icons-material/DashboardCustomizeSharp";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Avatar from "@mui/material/Avatar";
import main from "./images/main.png";
import fun from "./images/fun.png";
import tech from "./images/tech.png";
import lead from "./images/lead.png";

const navlinks = [
  {
    id: 1,
    name: "Discover",
    icon: <DashboardCustomizeSharpIcon />
  },
  {
    id: 2,
    name: "SmartUp",
    icon: <PanoramaFishEyeIcon />
  },
  {
    id: 3,
    name: "Main community",
    icon: <Avatar alt="Remy Sharp" src={main} sx={{ width: 24, height: 24 }} />
  },
  {
    id: 4,
    name: "Fun community",
    icon: <Avatar alt="Remy Sharp" src={fun} sx={{ width: 24, height: 24 }} />
  },
  {
    id: 5,
    name: "Tech community",
    icon: <Avatar alt="Remy Sharp" src={tech} sx={{ width: 24, height: 24 }} />
  },
  {
    id: 6,
    name: "Lead community",
    icon: <Avatar alt="Remy Sharp" src={lead} sx={{ width: 24, height: 24 }} />
  },
  {
    id: 7,
    name: "Personal",
    icon: <PermIdentityIcon />
  },
  {
    id: 8,
    name: "In Progress"
  },
  {
    id: 9,
    name: "Completed"
  },
  {
    id: 10,
    name: "Read later"
  }
];
export default navlinks;
