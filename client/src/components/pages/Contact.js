import React, { useState } from "react";
import "./Contact.css";
import contact from "../../images/contact.png";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { isEmail } from "../../utils/validation/Validation";
import ConfirmModal from "../../utils/confirmation/ConfirmModal";
import { useDispatch } from "react-redux";
import { toSendContact } from "../../actions/sendAction";

function Contact() {
    const [confirm, setConfirm] = useState();
    const dispatch = useDispatch();

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
                "Thank you! for you message, we will get back to you soon, please! ",
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
                "thank you! for you message, we will get back to you soon, please!",
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
    };
    return (
        <>
            {err && <h1 className="error">{err}</h1>}
            {success && <h1 className="success">{success}</h1>}
            <div className="main">
                <Card
                    className="container"
                    maxWidth="xs"
                    style={{ marginTop: "1rem" }}
                >
                    <Container maxWidth="xs" style={{ marginTop: "1rem" }}>
                        <h1>Send Us a message</h1>
                        <TextField
                            className="input"
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
                            className="input"
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
                        <textarea
                            className="text"
                            onInput={(e) => handle(e)}
                            placeholder="Message"
                            id="message"
                            variant="outlined"
                            name="message"
                            value={data.message}
                            margin="normal"
                            fullWidth
                            required
                        />

                        <Button
                            type="submit"
                            onClick={handleSubmit}
                            color="primary"
                            variant="contained"
                            fullWidth
                            style={{ marginTop: "1rem" }}
                        >
                            Submit
                        </Button>
                    </Container>
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
}

export default Contact;
