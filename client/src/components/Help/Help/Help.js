import React,{useState} from "react";
import useStyles from "./styles";
import moment from "moment";
import {
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Card,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

import { useSelector, useDispatch } from "react-redux";
import { deleteHelp } from '../../../actions/helpsActions'
import { getHelp } from '../../../actions/helpAction'

const Help = ({ help, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.auth);
    const token = useSelector((state) => state.token);
    // console.log(user.user.email)

    const handleUpdate = () => {
        setCurrentId(help._id)
        dispatch(getHelp(help._id,token));
    }
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={help?.avatar}
                title={help.helpTitle}
            />

            <div>
                <Typography variant="h6">{help.description}</Typography>
                <Typography variant="body2">
                    {/* {moment(post.createdAt).fromNow()} */}
                </Typography>
            </div>

            {user.user.email === help.email ? (
               <div>
               <Button
                   size="small"
                   onClick={handleUpdate}
               >
                   <MoreHorizIcon fontSize="default" />
                   
               </Button>
           </div>
            ) : null}

                   
            {user.user.email === help.email ? (
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => dispatch(deleteHelp(help._id,token))}
                    >
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>
            ) : null}
        </Card>
    );
};

export default Help;

