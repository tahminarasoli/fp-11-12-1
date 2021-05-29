import React, { useState } from "react";
import "./Contact.css";
import contact from "../../images/contact.png";
import {
    Card,
    Container,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import logo1 from "../../images/logo1.png";
import useStyles from "./styles";
// import { isEmail } from "../../utils/validation/Validation";
import ConfirmModal from "../../utils/confirmation/ConfirmModal";
// import ErrorModal from "../../utils/error/ErrorModal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toSendContact } from "../../actions/sendAction";

const initialValues = {
    fullName: "",
    email: "",
    message: "",
    err: "",
    success: "",
};

const Contact = () => {
    const classes = useStyles();
    const formRef = React.useRef();
    const [confirm, setConfirm] = useState();
    const dispatch = useDispatch();

    const history = useHistory();

    const [data, setData] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        const receiverEmail = "yorulmazburaksinan@gmail.com";
        const senderEmail = data.email;
        const title = data.fullName;
        const content = data.message;
        const body = {
            receiverEmail,
            senderEmail,
            messageTitle: title,
            messageContent: content,
        };

        if (senderEmail && title && content) {
            dispatch(toSendContact(body));
            setConfirm({
                title: "Message is sent successfully!",
                message: "Thank you, for your message! ",
            });
        }
    };

    // const validate = (data) => {
    //     console.log(data);
    //     if (!data.fullName) {
    //         return setData({
    //             ...data,
    //             err: "please provide your name.",
    //             success: "",
    //         });
    //     }

    //     if (!data.email) {
    //         return setData({
    //             ...data,
    //             err: "please provide your email.",
    //             success: "",
    //         });
    //     }
    //     if (!isEmail(data.email)) {
    //         return setData({
    //             ...data,
    //             err: "Invalid email.",
    //             success: "",
    //         });
    //     }
    //     if (!data.message) {
    //         return setData({
    //             ...data,
    //             err: "please provide a message.",
    //             success: "",
    //         });
    //     }

    //     return setData({
    //         ...data,
    //         err: "",
    //         success:
    //             "Thank you, for your message! We will get back to you soon!",
    //     });
    // };

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleConfirm = () => {
        setConfirm(null);
        history.push("/");
    };

    return (
        <>
            <div className="main">
                <Card className={classes.paper} maxWidth="xs">
                    <form
                        autoComplete="off"
                        noValidate
                        className={classes.form}
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <Container maxWidth="xs">
                            <div align="center">
                                <img src={logo1} alt="logo1" height="50" />
                                <Typography variant="h5">
                                    Send a message
                                </Typography>
                            </div>
                            <TextField
                                className={classes.input}
                                onChange={changeHandler}
                                label="Full Name"
                                id="fullName"
                                variant="outlined"
                                name="fullName"
                                value={data.fullName}
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField
                                className={classes.input}
                                onChange={changeHandler}
                                label="Email"
                                id="email"
                                variant="outlined"
                                name="email"
                                value={data.email}
                                margin="normal"
                                type="email"
                                fullWidth
                                required
                            />
                            <TextField
                                className={classes.input}
                                onChange={changeHandler}
                                placeholder="Message"
                                id="message"
                                variant="outlined"
                                name="message"
                                multiline
                                rows={4}
                                value={data.message}
                                fullWidth
                                required
                            />

                            <Button
                                className={classes.buttonSubmit}
                                type="submit"
                                color="primary"
                                variant="contained"
                                fullWidth
                                onClick={() => formRef.current.reportValidity()}
                            >
                                Submit
                            </Button>
                        </Container>
                    </form>
                </Card>

                {confirm && (
                    <ConfirmModal
                        title={confirm.title}
                        message={confirm.message}
                        onConfirm={handleConfirm}
                    />
                )}
                <div>
                    <img className="img" src={contact} alt="contact" />
                </div>
            </div>
        </>
    );
};

export default Contact;
