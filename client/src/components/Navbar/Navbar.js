import React, { useState } from "react";
import {
    AppBar,
    Avatar,
    Button,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    MenuList,
} from "@material-ui/core";
import Fade from '@material-ui/core/Fade';

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
    const classes = useStyles();

    const auth = useSelector((state) => state.auth);

    const { user, isLogged } = auth;
    console.log(user);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfile = () => {
        handleClose();
    };
    const handleLogout = async () => {
        try {
            await axios.get("/api/user/logout");
            localStorage.removeItem("firstLogin");
        } catch (err) {
            console.log(err);
        }
        window.location.href = "/";
        handleClose();
    };

    const userLink = () => {
        return (
            <div>
                <div className={classes.profile}>
                    <Avatar
                        className={classes.purple}
                        src={user?.avatar}
                        alt={user?.name}
                    >
                    </Avatar>
                    <Button 
                        className={classes.profile_button}
                        aria-controls="fade-menu" 
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        {user
                            ? `${user?.name}` === "undefined"
                                ? null
                                : `${user?.name}`
                            : null}
                    </Button>
                </div>
                <Menu
                   id="fade-menu"
                   anchorEl={anchorEl}
                   keepMounted
                   style = {window.matchMedia("(max-width: 700px)").matches ? {position: "absolute", top: "70px", height: "800px", width: "60vw", right: "900px"} : {position: "absolute", top: "120px", height: "1000px", width: "30vw"}}
                   open={open}
                   onClose={handleClose}
                   TransitionComponent={Fade}
                >    
                   <MenuList className = {classes.menu}>
                    <MenuItem
                        onClick={handleProfile}
                            component={Link}
                            to="/profile"
                            className = {classes.menuItem}
                        >
                            Profile
                            </MenuItem>

                            <MenuItem 
                        onClick={handleClose} component={Link} to="/help" className = {classes.menuItem}>
                                Help
                            </MenuItem>
                            <MenuItem 
                        onClick={handleLogout} component={Link} to="/" className = {classes.menuItem}>
                                Logout
                        </MenuItem>
                   </MenuList>
                </Menu>
            </div>
        );
    };

    return (
        <AppBar className={classes.appBar} position="static">
            <div className={classes.brandContainer}>
                <Link to="/">
                    <img className={classes.image} src={logo} alt="logo" />
                </Link>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h3"
                >
                    We help with shopping{" "}
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {isLogged ? (
                    userLink()
                ) : (
                   
                    <Button
                        component={Link}
                        to="/auth"
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Log in
                        </Button>
        )}
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;