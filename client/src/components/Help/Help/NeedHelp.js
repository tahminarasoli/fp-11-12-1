import React, { useState } from "react";
import useStyles from "./styles";
import {
    CardActions,
    CardContent,
    Typography,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    Collapse,
} from "@material-ui/core";
import clsx from "clsx";

import DeleteIcon from "@material-ui/icons/Delete";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteHelp } from "../../../actions/helpsActions";
import { getHelp } from "../../../actions/helpAction";

const NeedHelp = ({ help, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);

    const user = useSelector((state) => state.auth);
    const token = useSelector((state) => state.token);
    // console.log(user.user.email)

    const handleUpdate = () => {
        setCurrentId(help._id);
        dispatch(getHelp(help._id, token));
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDelete = () => {
        dispatch(deleteHelp(help._id, token));
        setCurrentId(false);
    };

    return (
        <Card className={classes.card1} raised>
            <CardHeader
                avatar={
                    <Avatar
                        className={classes.large}
                        title={help?.name}
                        src={help?.avatar}
                        alt={help?.name}
                    ></Avatar>
                }
                title={help?.address?.city}
                subheader={`Available: ${help?.availableSlot}`}
            />

            <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
            >
                {help.helpTitle}
            </Typography>
            <CardContent>
                <Typography variant="h6" color="textSecondary" component="h2">
                    Details:
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    size="small"
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {help.description.split(" ").splice(0, 200).join(" ")}
                        ...
                    </Typography>
                </Collapse>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {user.user.email !== help.email ? (
                    <IconButton
                        style={{ color: "grey" }}
                        size="small"
                        component={Link}
                        to={`/contactPage/${help._id}`}
                    >
                        <ContactPhoneIcon />
                    </IconButton>
                ) : null}

                {user.user.email === help.email ? (
                    <>
                        <IconButton
                            size="small"
                            to={`/contactPage/${help._id}`}
                            color="primary"
                            name="edit"
                            onClick={handleUpdate}
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            size="small"
                            color="secondary"
                            onClick={handleDelete}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </>
                ) : null}
            </CardActions>
        </Card>
    );
};

export default NeedHelp;
