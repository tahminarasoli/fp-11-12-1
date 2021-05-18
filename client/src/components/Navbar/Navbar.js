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
                    aria-controls="simple-menu"
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
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem
                        onClick={handleProfile}
                        component={Link}
                        to="/profile"
                    >
                        Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout} component={Link} to="/">
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
                    // <div className={classes.profile}>
                    //     <Avatar
                    //         className={classes.purple}
                    //         src={user?.result.imageUrl}
                    //         alt={user?.result.name}
                    //     >
                    //         {user?.result.name.charAt(0)}
                    //     </Avatar>
                    //     <Typography className={classes.userName} variant="h6">
                    //         {user.result.name}
                    //     </Typography>
                    //     <Button
                    //         variant="contained"
                    //         className={classes.logout}
                    //         color="secondary"
                    //     >
                    //         Log out
                    //     </Button>
                    // </div>
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
