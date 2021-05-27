import React, { useState } from "react";
import useStyles from "./styles";
import moment from "moment";
import {
    CardActions,
    Fab,
    CardContent,
    Typography,
    Card,
    CardHeader,
    Avatar,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteHelp } from "../../../actions/helpsActions";
import { getHelp } from "../../../actions/helpAction";

const NeedHelp = ({ help, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth);
    const token = useSelector((state) => state.token);
    // console.log(user.user.email)

    const handleUpdate = () => {
        setCurrentId(help._id);
        dispatch(getHelp(help._id, token));
    };

    const handleContact = () => {};

    return (
        <Card className={classes.card1} raised elevation={6}>
            <CardHeader
                avatar={
                    <Avatar
                        title={help?.name}
                        className={classes.large}
                        src={help?.avatar}
                        alt={help?.name}
                    ></Avatar>
                }
                title={help?.address?.city}
                subheader={`Available: ${help?.availableSlot}`}
            />

            <CardContent>
                <Typography variant="h5">{help.helpTitle}</Typography>
                <Typography paragraph>{help.description}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Fab
                    color="primary"
                    size="small"
                    component={Link}
                    to={`/contactPage/${help._id}`}
                    aria-label="contact"
                    className={classes.contact1}
                    onClick={handleContact}
                >
                    <ContactPhoneIcon />
                </Fab>
                {user.user.email === help.email ? (
                    <>
                        <Fab
                            size="small"
                            color="primary"
                            aria-label="edit"
                            className={classes.contact1}
                            onClick={handleUpdate}
                        >
                            <EditIcon />
                        </Fab>
                        <Fab
                            className={classes.contact1}
                            size="small"
                            aria-label="delete"
                            color="primary"
                            onClick={() =>
                                dispatch(deleteHelp(help._id, token))
                            }
                        >
                            <DeleteIcon />
                        </Fab>
                    </>
                ) : null}
            </CardActions>
        </Card>
    );
};

export default NeedHelp;
