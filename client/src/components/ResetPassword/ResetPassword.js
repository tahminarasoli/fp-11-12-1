import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import useStyles from "./styles";
import logo1 from "../../images/logo1.png";
import {
    showErrMsg,
    showSuccessMsg,
} from "../../utils/notification/Notification";

import { isMatch, isLength } from "../../utils/validation/Validation";
import { Button, TextField, Typography, Paper, Container, Grid } from "@material-ui/core";

const initialState = {
    password: "",
    cf_password: "",
    err: "",
    success: "",
};

const ResetPassword = () => {
    const classes = useStyles();
    const { token } = useParams();
    const [data, setData] = useState(initialState);

    const { password, cf_password, err, success } = data;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: "", success: "" });
    };

    const handleResetPassword = async () => {
        if (isLength(password)) {
            return setData({
                ...data,
                err: "Password must be at least 6 characters.",
                success: "",
            });
        }
        if (!isMatch(password, cf_password)) {
            return setData({
                ...data,
                err: "Password did not match.",
                success: "",
            });
        }
        try {
            const res = await axios.post(
                "/api/user/reset",
                { password },
                {
                    headers: { Authorization: token },
                }
            );
            return setData({ ...data, err: "", success: res.data.msg });
        } catch (err) {
            err.response.data.msg &&
                setData({ ...data, err: err.response.data.msg, success: "" });
        }
    };

    return ( 
    <Container component="main" maxWidth="xs" >
    <Paper className={classes.paper} >
                <img
                   
                    src={logo1}
                    alt="logo1"
                    height="50"
                />
            <Typography variant='h5' >Reset Your Password?</Typography>
            <form 
             autoComplete="off"
             noValidate
            className={classes.form}>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <Grid container spacing={2}>
                <TextField
                  variant="outlined"
                  fullWidth
                   className={classes.input}
                    type="password"
                    placeholder="Enter password"
                    label="Enter password"
                    id="password"
                    defaultValue={password}
                    name="password"
                    onChange={handleChangeInput}
                    required
                    autoFocus
                />

                <TextField
                 className={classes.input}
                       variant="outlined"
                    label="Confirm password"
                    type="password"
                    fullWidth
                    placeholder="Confirm password"
                    id="cf_password"
                    defaultValue={cf_password}
                    name="cf_password"
                    onChange={handleChangeInput}
                    required
                    autoFocus
                    
                />
                </Grid>
                <Button  
                 fullWidth
                 variant="contained"
                 color="primary"
                className={classes.submit} onClick={handleResetPassword}>Reset Password</Button>
           
                </form>
            </Paper>
      </Container>
    );
};

export default ResetPassword;
