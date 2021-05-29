import React from "react";

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon style={{ color: '#87C0F4' }} />,
    cName: "nav-text",
  },

  {
    title: "About",
    path: "/About",
    icon: <InfoIcon style={{ color: ' #F499AB' }} />,
    cName: "nav-text",
  },
  {
    title: "Contact us",
    path: "/Contact",
    icon: <ContactMailIcon color="action" />,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/Services",
    icon:<SettingsApplicationsIcon color="secondary" />,
    cName: "nav-text",
  },
];
