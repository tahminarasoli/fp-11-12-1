import React, { useState } from "react";
import axios from "axios";
import './forgotPassword.css'

import {
    showErrMsg,
    showSuccessMsg,
} from "../../utils/notification/Notification";

import { isEmail } from "../../utils/validation/Validation";

const initialState = {
    email: "",
    err: "",
    success: "",
};

const ForgotPassword = () => {
    const [data, setData] = useState(initialState);

    const { email, err, success } = data;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: "", success: "" });
    };

    const handleForgotPassword = async () => {
        if (!isEmail(email)) {
            return setData({ ...data, err: "Invalid email.", success: "" });
        }
        try {
            const res = await axios.post(`/api/user/forgot`, {email});
            return setData({ ...data, err: "", success: res.data.msg });
        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: "" });
        }
    };

    return (
        <div className="fg_pass">
            <h2>Forgot Your Password?</h2>
            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <label htmlFor="email">Email Address</label>
                <input
                    type="text"
                    placeholder="Enter your email address"
                    id="email"
                    defaultValue={email}
                    name="email"
                    onChange={handleChangeInput}
                />
                <button onClick={handleForgotPassword}>
                    Verify your email
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;
