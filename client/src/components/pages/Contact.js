import React, { useState } from "react";
import "./Contact.css";
import contact from "../../images/contact.png";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Contact() {
  const url = "";
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const { err, success } = data;

  function handleSubmit(e) {
    e.preventDefault();
    validate(data);
    axios.post(url, {
      fullName: data.fullName,
      email: data.email,
      message: data.message,
    });
    console.log(data);
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

    console.log(newData);
  }
  return (
    <>
      {err && <h1 className="error">{err}</h1>}
      {success && <h1 className="success">{success}</h1>}
      <div className="main">
        <Card className="container" maxWidth="xs" style={{ marginTop: "1rem" }}>
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

        <div>
          <img className="img" src={contact} alt="contact" />
        </div>
      </div>
    </>
  );
}

export default Contact;
