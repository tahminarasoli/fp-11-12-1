import React,{useState} from "react";
import useStyles from "./styles";

import {
    CardActions,
    Fab,
   CardContent,
   Typography,
    Card, CardHeader, Avatar
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


import EditIcon from '@material-ui/icons/Edit';
import { Link }  from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteHelp } from '../../../actions/helpsActions'
import { getHelp } from '../../../actions/helpAction'

const Help = ({ help, setCurrentId, }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.auth);
    const token = useSelector((state) => state.token);
    // console.log(user.user.email)

    const handleUpdate = () => {
        setCurrentId(help._id)
        dispatch(getHelp(help._id,token));
    }

    const handleContact = () => {

    }
    return (
        <Card 
        className={classes.card} 
        raised 
        elevation={6}>
            <CardHeader 
            avatar={
                <Avatar 
                title={help?.name}
                className={classes.large}
                src={help?.avatar}
                alt={help?.name}
           >
                </Avatar>
            }
            
                title={help?.address?.city}
                 subheader={`Avialable: ${help?.availableSlot}`}
                
            />
       
            <CardContent >
                <Typography 
                    variant='h5'
                >
                    {help.helpTitle}
                </Typography>
                <Typography 
                    paragraph
                >
                    {help.description}
                    </Typography>
               
            </CardContent>
       {user.user.email === help.email ? (
                <CardActions className={classes.cardActions}>
                    <Fab
                    color='primary'
                    size='small'
                    component={Link}
                    to="/contact"
                aria-label="contact" 
                className={classes.contact}
                onClick={handleContact}
                >
                     <ContactPhoneIcon />
                    </Fab>
                   
                    <Fab 
                size='small'
                color="primary" 
                aria-label="edit" 
                className={classes.edit}  
                onClick={handleUpdate}>
                  <EditIcon />
                </Fab>
                    <Fab 
                 className={classes.delete}   
                size='small'
                aria-label="delete" 
                color='primary'
                onClick={() => dispatch(deleteHelp(help._id,token))}
                    >
                <DeleteIcon />
                    </Fab>
                </CardActions>
            ) : null}
         
        </Card>
    );
};

export default Help;

