import React from "react";

import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "About",
    path: "/About",
    icon: <FcIcons.FcAbout />,
    cName: "nav-text",
  },
  {
    title: "Contact us",
    path: "/Contact",
    icon: <MdIcons.MdContactPhone />,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/Services",
    icon: <FcIcons.FcServices />,
    cName: "nav-text",
  },
];
