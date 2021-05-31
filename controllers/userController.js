const UserModel = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const sendMail = require("./sendMail.js");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const fetch = require("node-fetch");

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;

const userController = {
    register: async (req, res) => {
        try {
            const {
                first,
                last,
                email,
                password,
                phone,
                avatar,
                streetName,
                city,
                box,
                zipCode,
            } = req.body;
            if (!first || !last || !email || !password) {
                return res
                    .status(400)
                    .json({ msg: "Please fill in all fields." });
            }
            if (!validateEmail(email)) {
                return res.status(400).json({ msg: "Invalid emails." });
            }

            const user = await UserModel.findOne({ email });
            if (user) {
                return res
                    .status(400)
                    .json({ msg: "This email already exists." });
            }

            if (password.length < 6) {
                return res
                    .status(400)
                    .json({ msg: "Password must be at least 6 characters." });
            }

            const passwordHash = await bcrypt.hash(password, 12);

            const newUser = {
                first,
                last,
                email,
                password: passwordHash,
                phone,
                avatar,
                streetName,
                city,
                box,
                zipCode,
            };

            const activation_token = createActivationToken(newUser);

            const url = `${CLIENT_URL}/activate/${activation_token}`;

            sendMail("verify", email, url, "Verify your email address");

            res.json({
                msg: "Register Success! Please activate your email to start.",
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    activateEmail: async (req, res) => {
        // console.log("inside backend email activation")
        try {
            const { activation_token } = req.body;
            const user = jwt.verify(
                activation_token,
                process.env.ACTIVATION_TOKEN_SECRET
            );

            const {
                first,
                last,
                email,
                password,
                phone,
                avatar,
                streetName,
                city,
                box,
                zipCode,
            } = user;

            const existUser = await UserModel.findOne({ email });
            if (existUser) {
                return res
                    .status(400)
                    .json({ msg: "This email already exists." });
            }

            const newUser = await UserModel.create({
                name: `${first} ${last}`,
                email,
                password,
                phone,
                avatar,
                address: {
                    streetName,
                    box,
                    city,
                    zipCode,
                },
            });

            await newUser.save();

            res.json({ msg: "Account has been activated!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ msg: "Please fill in all fields." });
            }

            const user = await UserModel.findOne({ email });
            if (!user) {
                return res
                    .status(400)
                    .json({ msg: "This email does not exist." });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Password is incorrect." });
            }

            const refresh_token = createRefreshToken({ id: user._id });
            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                path: "/api/user/refresh_token",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.json({ msg: "Login success!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) {
                return res.status(400).json({ msg: "Please login now!" });
            }

            jwt.verify(
                rf_token,
                process.env.REFRESH_TOKEN_SECRET,
                (err, user) => {
                    if (err) {
                        return res.status(400).json({ msg: err.message });
                    }
                    const access_token = createAccessToken({ id: user.id });

                    res.json({ access_token });
                }
            );
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const { email } = req.body;
            const user = await UserModel.findOne({ email });

            if (!user) {
                return res
                    .status(400)
                    .json({ msg: "This email does not exist." });
            }

            const access_token = createAccessToken({ id: user._id });
            const url = `${CLIENT_URL}/reset/${access_token}`;

            sendMail("verify",email, url, "Reset your password");
            res.json({ msg: "Re-send the password, please check your email." });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { password } = req.body;

            const passwordHash = await bcrypt.hash(password, 12);

            await UserModel.findOneAndUpdate(
                { _id: req.user.id },
                {
                    password: passwordHash,
                }
            );

            res.json({ msg: "Password succesfully changed!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getUserInfor: async (req, res) => {
        try {
            const user = await UserModel.findById({ _id: req.user.id }).select(
                "-password"
            );

            res.json(user);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getAllUsersInfor: async (req, res) => {
        try {
            const users = await UserModel.find().select("-password");

            res.json(users);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie("refreshtoken", {
                path: "/api/user/refresh_token",
            });
            return res.json({ msg: "Logged out." });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateUser: async (req, res) => {
        try {
            const { name, avatar, phone, city, streetName, box, zipCode } =
                req.body;
            await UserModel.findOneAndUpdate(
                { _id: req.user.id },
                {
                    name,
                    avatar,
                    phone,
                    address: {
                        city,
                        streetName,
                        box,
                        zipCode,
                    },
                }
            );
            res.json({ msg: "Update Success!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateUsersRole: async (req, res) => {
        try {
            const { role } = req.body;
            await UserModel.findOneAndUpdate(
                { _id: req.params.id },
                {
                    role,
                }
            );
            res.json({ msg: "Update Success!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            await UserModel.findByIdAndDelete(req.params.id);
            res.json({ msg: "Delete Success!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    googleLogin: async (req, res) => {
        try {
            const { tokenId } = req.body;
            const verify = await client.verifyIdToken({
                idToken: tokenId,
                audience: process.env.MAILING_SERVICE_CLIENT_ID,
            });

            const { email_verified, email, name, picture } = verify.payload;

            const password = email + process.env.GOOGLE_SECRET;

            const passwordHash = await bcrypt.hash(password, 12);

            if (!email_verified) {
                return res.status(400).json({
                    msg: "Email verification failed. Verify your google account mail.",
                });
            }

            const user = await UserModel.findOne({ email });

            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {
                    return res
                        .status(400)
                        .json({ msg: "Password is incorrect." });
                }

                const refresh_token = createRefreshToken({ id: user._id });
                res.cookie("refreshtoken", refresh_token, {
                    httpOnly: true,
                    path: "/api/user/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                });

                res.json({ msg: "Login success!" });
            } else {
                const newUser = new UserModel({
                    name,
                    email,
                    password: passwordHash,
                    avatar: picture,
                });

                await newUser.save();

                const refresh_token = createRefreshToken({ id: newUser._id });
                res.cookie("refreshtoken", refresh_token, {
                    httpOnly: true,
                    path: "/api/user/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                });

                res.json({ msg: "Login success!" });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    facebookLogin: async (req, res) => {
        try {
            const { accessToken, userID } = req.body;

            const URL = `https://graph.facebook.com/v4.0/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;

            const data = await fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    return res;
                });

            const { email, name, picture } = data;

            const password = email + process.env.FACEBOOK_SECRET;

            const passwordHash = await bcrypt.hash(password, 12);

            const user = await UserModel.findOne({ email });

            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {
                    return res
                        .status(400)
                        .json({ msg: "Password is incorrect." });
                }

                const refresh_token = createRefreshToken({ id: user._id });
                res.cookie("refreshtoken", refresh_token, {
                    httpOnly: true,
                    path: "/api/user/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                });

                res.json({ msg: "Login success!" });
            } else {
                const newUser = new UserModel({
                    name,
                    email,
                    password: passwordHash,
                    avatar: picture.data.url,
                });

                await newUser.save();

                const refresh_token = createRefreshToken({ id: newUser._id });
                res.cookie("refreshtoken", refresh_token, {
                    httpOnly: true,
                    path: "/api/user/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                });

                res.json({ msg: "Login success!" });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
        expiresIn: "5m",
    });
};

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
    });
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    });
};

module.exports = userController;
