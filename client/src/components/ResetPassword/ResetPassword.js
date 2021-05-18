import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './resetPassword.css'

import {
    showErrMsg,
    showSuccessMsg,
} from "../../utils/notification/Notification";

import { isMatch, isLength } from "../../utils/validation/Validation";

const initialState = {
    password: "",
    cf_password: "",
    err: "",
    success: "",
};

const ResetPassword = () => {
    const { token } = useParams();
    const [data, setData] = useState(initialState);

    const { password, cf_password, err, success } = data;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: "", success: "" });
    };

    const handleResetPassword = async () => {
        if (isLength(password)) {
            return setData({
                ...data,
                err: "Password must be at least 6 characters.",
                success: "",
            });
        }
        if (!isMatch(password, cf_password)) {
            return setData({
                ...data,
                err: "Password did not match.",
                success: "",
            });
        }
        try {
            const res = await axios.post(
                "/api/user/reset",
                { password },
                {
                    headers: { Authorization: token },
                }
            );
            return setData({ ...data, err: "", success: res.data.msg });
        } catch (err) {
            err.response.data.msg &&
                setData({ ...data, err: err.response.data.msg, success: "" });
        }
    };

    return (
        <div className="fg_pass">
            <h2>Reset Your Password?</h2>
            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    defaultValue={password}
                    name="password"
                    onChange={handleChangeInput}
                />

                <label htmlFor="cf_password">Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    id="cf_password"
                    defaultValue={cf_password}
                    name="cf_password"
                    onChange={handleChangeInput}
                />

                <button onClick={handleResetPassword}>Reset Password</button>
            </div>
        </div>
    );
};

export default ResetPassword;
