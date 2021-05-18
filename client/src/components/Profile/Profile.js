import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllUsers, dispatchGetAllUsers } from "../../actions/usersAction";

import {
    showErrMsg,
    showSuccessMsg,
} from "../../utils/notification/Notification";

import { isLength, isMatch } from "../../utils/validation/Validation";

const initialState = {
    name: "",
    password: "",
    cf_password: "",
    phone: "",
    city: "",
    streetName: "",
    box: "",
    zipCode: "",
    err: "",
    success: "",
};

const Profile = () => {
    const auth = useSelector((state) => state.auth);
    const token = useSelector((state) => state.token);
    const users = useSelector((state) => state.users);

    const { user, isAdmin } = auth;
    const [data, setData] = useState(initialState);

    const {
        name,
        password,
        cf_password,
        phone,
        city,
        box,
        streetName,
        zipCode,
        err,
        success,
    } = data;

    const [avatar, setAvatar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [callback, setCallback] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAdmin) {
            fetchAllUsers(token).then((res) => {
                dispatch(dispatchGetAllUsers(res));
            });
        }
    }, [token, isAdmin, dispatch, callback]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: "", success: "" });
    };

    const handleChangeAvatar = async (e) => {
        e.preventDefault();

        const file = e.target.files[0];

        if (!file) {
            return setData({
                ...data,
                err: "No files were uploaded.",
                success: "",
            });
        }

        if (
            file.type !== "image/jpeg" &&
            file.type !== "image/png" &&
            file.type !== "image/jpg"
        ) {
            return setData({
                ...data,
                err: "File format is incorrect.",
                success: "",
            });
        }

        if (file.size > 1024 * 1024) {
            // 1mb
            return setData({
                ...data,
                err: "Size too large.",
                success: "",
            });
        }

        try {
            let formData = new FormData();
            formData.append("file", file);

            setLoading(true);

            const res = await axios.post("/api/upload_avatar", formData, {
                headers: {
                    "content-type": "multipart/form-data",
                    Authorization: token,
                },
            });

            setLoading(false);
            setAvatar(res.data.url);
            setData({ ...data, err: "", success: "Photo has been changed." });
        } catch (err) {
            err.response.data.msg &&
                setData({ ...data, err: err.response.data.msg, success: "" });
        }
    };

    const updateInfor = async () => {
        try {
            const res = await axios.patch(
                "/api/user/update",
                {
                    name: name ? name : user.name,
                    avatar: avatar ? avatar : user.avatar,
                    phone: phone ? phone : user.phone,
                    city: city ? city : user?.address?.city,
                    streetName: streetName
                        ? streetName
                        : user?.address?.streetName,
                    box: box ? box : user?.address?.box,
                    zipCode: zipCode ? zipCode : user?.address?.zipCode,
                },
                {
                    headers: { Authorization: token },
                }
            );
            
            setData({ ...data, err: "", success: res.data.msg });
        } catch (err) {
            console.log(err)
            err.response?.data?.msg &&
                setData({ ...data, err: err.response?.data?.msg, success: "" });
        }
    };

    const updatePassword = async () => {
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

    const handleUpdate = () => {
        if (name || avatar || phone || city || zipCode || streetName || box) updateInfor();
        if (password) updatePassword();
    };

    const handleDelete = async (id) => {
        try {
            if (user._id !== id) {
                if (
                    window.confirm(
                        "Are you sure you want to delete this account?"
                    )
                ) {
                    setLoading(true);
                    await axios.delete(`/api/user/delete/${id}`, {
                        headers: { Authorization: token },
                    });
                    setLoading(false);
                    setCallback(!callback);
                }
            }
        } catch (err) {
            err.response.data.msg &&
                setData({ ...data, err: err.response.data.msg, success: "" });
        }
    };
    console.log(user);

    return (
        <>
            <div>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                {loading && <h3>Loading......</h3>}
            </div>
            <div className="profile_page">
                <div className="col-left">
                    <h2>{isAdmin ? "Admin Profile" : "User Profile"}</h2>
                    <div className="avatar">
                        <img src={avatar ? avatar : user.avatar} alt="" />
                        <span>
                            <i className="fas fa-camera"></i>
                            <p>Change</p>
                            <input
                                type="file"
                                name="file"
                                id="file_up"
                                onChange={handleChangeAvatar}
                            />
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                            defaultValue={user?.name}
                            name="name"
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="text"
                            placeholder="Enter email address"
                            id="email"
                            defaultValue={user?.email}
                            name="email"
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            id="password"
                            defaultValue={password}
                            name="password"
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cf_password">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            id="cf_password"
                            defaultValue={cf_password}
                            name="cf_password"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            id="phone"
                            defaultValue={user?.phone}
                            name="phone"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            placeholder="City"
                            id="city"
                            defaultValue={user?.address?.city}
                            name="city"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetName">Street Name</label>
                        <input
                            type="text"
                            placeholder="Street Name"
                            id="streetName"
                            defaultValue={user?.address?.streetName}
                            name="streetName"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="box">Box Number</label>
                        <input
                            type="text"
                            placeholder="Box Number"
                            id="box"
                            defaultValue={user?.address?.box}
                            name="box"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="text"
                            placeholder="Zip Code"
                            id="zipCode"
                            defaultValue={user?.address?.zipCode}
                            name="zipCode"
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div>
                        <em style={{ color: "crimson" }}>
                            * If you update your password here, you will not be
                            able to login quickly using google and facebook.
                        </em>
                    </div>

                    <button disabled={loading} onClick={handleUpdate}>
                        Update
                    </button>
                </div>

                {isAdmin ? (
                    <div className="col-right">
                        <h2>Users</h2>

                        <div style={{ overflowX: "auto" }}>
                            <table className="users">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Admin</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {user.role === 1 ? (
                                                    <i
                                                        className="fas fa-check"
                                                        title="Admin"
                                                    ></i>
                                                ) : (
                                                    <i
                                                        className="fas fa-times"
                                                        title="User"
                                                    ></i>
                                                )}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/edit_user/${user._id}`}
                                                >
                                                    <i
                                                        className="fas fa-edit"
                                                        title="Edit"
                                                    ></i>
                                                </Link>
                                                <i
                                                    className="fas fa-trash-alt"
                                                    title="Delete"
                                                    onClick={() =>
                                                        handleDelete(user._id)
                                                    }
                                                ></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Profile;
