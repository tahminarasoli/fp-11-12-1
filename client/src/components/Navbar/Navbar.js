import React, { useState } from "react";
import {
    AppBar,
    Avatar,
    Button,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
} from "@material-ui/core";
import Fade from '@material-ui/core/Fade';

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import axios from "axios";

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
                   open={open}
                   onClose={handleClose}
                   TransitionComponent={Fade}
                >    
                    <MenuItem
                    onClick={handleProfile}
                        component={Link}
                        to="/profile"
                    >
                     Profile
                    </MenuItem>
                    
                    <MenuItem 
                  onClick={handleClose} component={Link} to="/help">
                        Help
                    </MenuItem>
                    <MenuItem 
                  onClick={handleLogout} component={Link} to="/">
                        Logout
                    </MenuItem>
                  
                </Menu>
            </div>
        );
    };

    return (
        <AppBar className={classes.appBar} position="static">
            <div className={classes.brandContainer}>
                <img className={classes.image} src={logo} alt="logo" />
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h2"
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
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
