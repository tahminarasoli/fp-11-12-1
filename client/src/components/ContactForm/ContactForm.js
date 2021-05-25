import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import logo1 from "../../images/logo1.png";
import useStyles from "./styles";
import ConfirmModal from "../../utils/confirmation/ConfirmModal";
import { createHelp, updateHelp } from "../../actions/helpsActions";

const initialValues = {
    helpTitle: "",
    description: "",
    availableSlot: "2021-05-24T17:30",
};

export const ContactForm = ({ wantsToHelp, setWantsToHelp, currentId }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const help = useSelector((state) => state.help);
    const [confirm, setConfirm] = useState();

    const [cardData, setCardData] = useState(initialValues);

    const changeHandler = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (currentId) {
            setConfirm({
                title: "Your help is updated!",
                message: "Our users will contact you soon."
            }); 
            dispatch(
                updateHelp(
                    currentId,
                    {
                        ...cardData,
                        wantsToHelp,
                    },
                    token
                )
            );
        } else {
            setConfirm({
                title: "Your help is created!",
                message: "Our users will contact you soon. "
            }); 
            dispatch(
                createHelp(
                    {
                        ...cardData,
                        wantsToHelp,
                    },
                    token
                )
            );
        }

        handleClear();
    };

    const handleClear = () => {
        setCardData(initialValues);
    };
    const switchMode = () => {
        setWantsToHelp((prevWantsToHelp) => !prevWantsToHelp);
    };

    const handleConfirm = () => {
        setConfirm(null);
    }

    return (
        <Paper className={classes.paper} >
             <form 
             autoComplete="off" 
             noValidate className={`${classes.root} ${classes.form}`}  
             onSubmit={handleSubmit}
             >
        {confirm &&  <ConfirmModal title={confirm.title} message={confirm.message} onConfirm={handleConfirm}/>}
        <div align='center'>
            <img 
            src={logo1} 
            alt="logo1" 
            height="50" 
            />
            <Typography  variant="h5">
                {currentId ? "Update" : "Create"}
            </Typography>
            <Typography variant="h5">
                {wantsToHelp ? "Desire For Help" : "Reguest For Help"}
            </Typography>
            </div>
            <Button
                className={classes.switch}
                fullWidth
                variant="contained"
                color="primary"
                onClick={switchMode}
            >
                {wantsToHelp ? " I Need a Help?" : "I Want to Help? "}
            </Button>
           
             

                    <>
                        <TextField
                            className={classes.input}
                            name="helpTitle"
                            label="How you can help?"
                            variant="outlined"
                            id="name"
                            value={cardData.helpTitle}
                            fullWidth
                            changeHandler={changeHandler}
                            onChange={(e) =>
                                setCardData({
                                    ...cardData,
                                    helpTitle: e.target.value,
                                })
                            }
                        />

                        <TextField
                            className={classes.input}
                            name="description"
                            label="Describe All The Details"
                            variant="outlined"
                            value={cardData.description}
                            fullWidth
                            changeHandler={changeHandler}
                            onChange={(e) =>
                                setCardData({
                                    ...cardData,
                                    description: e.target.value,
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
export default ContactForm
