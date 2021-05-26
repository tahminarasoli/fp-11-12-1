import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import logo1 from "../../images/logo1.png";
import useStyles from "./styles";
import axios from 'axios'

import {getHelp} from '../../actions/helpAction'


const initialValues = {
    messageTitle: "",
    messageContent: "",
};

export const ContactForm = () => {
    const classes = useStyles();
    const {id} = useParams();

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const help = useSelector((state) => state.help);
    const user = useSelector((state) => state.auth);

    const [cardData, setCardData] = useState(initialValues);



    const changeHandler = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       console.log(cardData)
        
        handleClear();
    };
    useEffect(()=> {
        dispatch(getHelp(id, token))
    },[dispatch, id, token])

    const handleClear = () => {
        setCardData(initialValues);
    };

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <div align="center">
                    <img src={logo1} alt="logo1" height="50" />
                    <Typography variant="h5"></Typography>
                    <Typography variant="h5">Send a message</Typography>
                </div>

                <>
                    <TextField
                        className={classes.input}
                        name="messageTitle"
                        label="messageTitle?"
                        variant="outlined"
                        id="name"
                        value={cardData.messageTitle}
                        fullWidth
                        changeHandler={changeHandler}
                        onChange={(e) =>
                            setCardData({
                                ...cardData,
                                messageTitle: e.target.value,
                            })
                        }
                    />

                    <TextField
                        className={classes.input}
                        name="messageContent"
                        label="messageContent"
                        variant="outlined"
                        value={cardData.messageContent}
                        fullWidth
                        changeHandler={changeHandler}
                        onChange={(e) =>
                            setCardData({
                                ...cardData,
                                messageContent: e.target.value,
                            })
                        }
                    />
                </>

                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    className={classes.buttonClear}
                    variant="contained"
                    color="#5B5B61"
                    onClick={handleClear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};
export default ContactForm;
