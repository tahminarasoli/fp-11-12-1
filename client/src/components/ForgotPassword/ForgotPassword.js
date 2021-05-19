import React, { useState } from "react";
import axios from "axios";
import './forgotPassword.css'
import useStyles from "./styles";
import logo1 from "../../images/logo1.png";

import {
    showErrMsg,
    showSuccessMsg,
} from "../../utils/notification/Notification";

import { isEmail } from "../../utils/validation/Validation";
import { Button, Container, Input, Paper, TextField, Typography } from "@material-ui/core";

const initialState = {
    email: "",
    err: "",
    success: "",
};

const ForgotPassword = () => {
    const classes = useStyles();
    const [data, setData] = useState(initialState);

    const { email, err, success } = data;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: "", success: "" });
    };

    const handleForgotPassword = async () => {
        if (!isEmail(email)) {
            return setData({ ...data, err: "Invalid email.", success: "" });
        }
        try {
            const res = await axios.post(`/api/user/forgot`, {email});
            return setData({ ...data, err: "", success: res.data.msg });
        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: "" });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
               <Paper className={classes.paper} elevation={2}>
                <img
                    className={classes.avatar}
                    src={logo1}
                    alt="logo1"
                    height="50"
                />
            <Typography variant="h5">Forgot Your Password?</Typography>
            <form className={classes.form}>
            {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
              <TextField
               className={classes.input}
                    fullWidth
                    required
                    variant="outlined"
                    label="Enter your email address"
                    htmlFor="email"
                    type="text"
                    placeholder="Email address"
                    id="email"
                    defaultValue={email}
                    name="email"
                    onChange={handleChangeInput}
                    />
                    
                <Button 
                 className={classes.submit}
                 onClick={handleForgotPassword}
                 fullWidth
                 color='primary'
                 variant='contained'
                >
                    Verify your email
                </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default ForgotPassword;
