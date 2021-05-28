import React, { useState } from "react";
import "./Contact.css";
import contact from "../../images/contact.png";
import { Card, Container, Typography, TextField, Button } from "@material-ui/core";
import logo1 from "../../images/logo1.png";
import useStyles from "./styles";
import { isEmail } from "../../utils/validation/Validation";
import ConfirmModal from "../../utils/confirmation/ConfirmModal";
import ErrorModal from "../../utils/error/ErrorModal"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toSendContact } from "../../actions/sendAction";

    const Contact = () => {
    const classes = useStyles();
    const [confirm, setConfirm] = useState();
    const dispatch = useDispatch();

    const [ error, setError] = useState();


    const history = useHistory();

    const [data, setData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const { err, success } = data;

    function handleSubmit(e) {
        e.preventDefault();
        validate(data);

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

        dispatch(toSendContact(body));
        setConfirm({
            title: "Message is sent successfully!",
            message:
                "Thank you, for your message! ",
        });
    }

    const validate = (data) => {
        if (!data.fullName) {
            return setData({
                ...data,
                err: "please provide your name.",
                success: "",
            });
        }
        if (!data.email) {
            return setData({
                ...data,
                err: "please provide your email.",
                success: "",
            });
        }
        if (!data.message) {
            return setData({
                ...data,
                err: "please provide a message.",
                success: "",
            });
        }
        if (!isEmail(data.email)) {
            return setData({
                ...data,
                err: "Invalid email.",
                success: "",
            });
        }

        return setData({
            ...data,
            err: "",
            success:
                "Thank you, for your message! We will get back to you soon!",
        });
    };

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;

        setData(newData);
    }

    const handleConfirm = () => {
        setConfirm(null);

        window.location.href = "/";


        history.push("/");

    };
    const handleError = () => {
        setError(null);
    }
    return (
        <>
            {err && <h1 className="error">{err}</h1>}
            {success && <h1 className="success">{success}</h1>}
            <div className="main">
                <Card
                   className={classes.paper}
                    maxWidth="xs"
                    className={classes.paper}
                    >
                    <form
                autoComplete="off"
                noValidate
                className={classes.form}
                >
                    <Container maxWidth="xs">
                        <div align='center'>
                    <img src={logo1} alt="logo1" height="50" />
                        <Typography variant="h5">Send a message</Typography>
                        </div>
                        <TextField
                            className={classes.input}
                            onInput={(e) => handle(e)}
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
                            onInput={(e) => handle(e)}
                            label="Email"
                            id="email"
                            variant="outlined"
                            name="email"
                            value={data.email}
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField
                           className={classes.input}
                            onInput={(e) => handle(e)}
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
                            onClick={handleSubmit}
                            color="primary"
                            variant="contained"
                            fullWidth
                            
                        >
                            Submit
                        </Button>
                    </Container>
                    </form>
                </Card>

                { confirm && (
                
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
}

export default Contact;
