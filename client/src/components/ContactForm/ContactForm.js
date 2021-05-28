import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, TextField, Typography, CardHeader, Avatar, Container } from "@material-ui/core";
import logo1 from "../../images/logo1.png";
import useStyles from "./styles";
import ConfirmModal from "../../utils/confirmation/ConfirmModal";

import { getHelp } from "../../actions/helpAction";
import { toSend } from "../../actions/sendAction";

const initialValues = {
    messageTitle: "",
    messageContent: "",
};

    const ContactForm = () => {
    const classes = useStyles();
    const { id } = useParams();

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const help = useSelector((state) => state.help);
    const user = useSelector((state) => state.auth);
    const [confirm, setConfirm] = useState();

    const [cardData, setCardData] = useState(initialValues);

    const changeHandler = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const receiverEmail = help.email;
        const senderEmail = user.user.email;
        const title = cardData.messageTitle;
        const content = cardData.messageContent;
        const body = {
            receiverEmail,
            senderEmail,
            messageTitle: title,
            messageContent: content,
        };
        setConfirm({
            title: "Message is sent successfully!",
            message: "For fast help you can call the user. "
        }); 
        dispatch(toSend(body));

        handleClear();
           
    };
    useEffect(() => {
        dispatch(getHelp(id, token));
    }, [dispatch, id, token]);

    const handleClear = () => {
        setCardData(initialValues);
    };

    const handleConfirm = () => {
        setConfirm(null);
        window.location.href = "/helps";
    }

    return (
        <Container component="main" maxWidth="xs">
        <Card 
        raised
        className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >
                 {confirm &&  <ConfirmModal title={confirm.title} message={confirm.message} onConfirm={handleConfirm}/>}
                <div align="center">
                    <img src={logo1} alt="logo1" height="50" />
                    <Typography variant="h5">Send a message</Typography>
               
                <CardHeader align='center'
            avatar={
                <Avatar 
                title={help?.name}
                className={classes.large}
                src={help?.avatar}
                alt={help?.name}
           >
                </Avatar>
            }
            
                title={help?.name}
                 subheader={`Tel: ${help?.phone}`}
                
            />
       </div>
                <>
                    <TextField
                        className={classes.input}
                        name="messageTitle"
                        label="Title"
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
                        label="Message:"
                        variant="outlined"
                        value={cardData.messageContent}
                        fullWidth
                        multiline
                        rows={4}
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
                    Contact
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
        </Card>
        </Container>
    );
};
export default ContactForm;
