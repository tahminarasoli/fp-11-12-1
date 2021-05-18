const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");

// Only for /api/auth

/** 
 * @route POST /api/user/register
 * @desc Register endpoint
 * @access Public
*/
router.post("/register",  userController.register)

/** 
 * @route POST /api/user/activation
 * @desc Register then activation endpoint
 * @access Public
*/
router.post("/activation",  userController.activateEmail)

/** 
 * @route POST /api/user/login
 * @desc Login endpoint
 * @access Public
*/
router.post("/login",  userController.login)

/** 
 * @route POST /api/user/refresh_token
 * @desc Refresh Token endpoint
 * @access Public
*/
router.post("/refresh_token",  userController.getAccessToken)

/** 
 * @route POST /api/user/forgot
 * @desc Forgot Password endpoint
 * @access Public
*/
router.post("/forgot",  userController.forgotPassword)

/** 
 * @route POST /api/user/reset
 * @desc Reset Password endpoint
 * @access Private
*/
router.post("/reset", auth,  userController.resetPassword)

/** 
 * @route GET /api/user/infor
 * @desc Get UserInfo endpoint
 * @access Private
*/
router.get("/infor", auth,  userController.getUserInfor)

/** 
 * @route GET /api/user/allInfor
 * @desc Get AllUsersInfo endpoint
 * @access Private
*/
router.get("/all_infor", auth, authAdmin,  userController.getAllUsersInfor)

/** 
 * @route GET /api/user/logout
 * @desc Logout endpoint
 * @access Private
*/
router.get("/logout",  userController.logout)

/** 
 * @route PATCH /api/user/update
 * @desc Update User endpoint
 * @access Private
*/
router.patch("/update", auth,  userController.updateUser)

/** 
 * @route PATCH /api/user/update_role/:id
 * @desc Update User Role endpoint
 * @access Private
*/
router.patch("/update_role/:id", auth, authAdmin, userController.updateUsersRole)

/** 
 * @route DELETE /api/user/delete/:id
 * @desc Delete User endpoint
 * @access Private
*/
router.delete("/delete/:id", auth, authAdmin, userController.deleteUser)

// Social Login

/** 
 * @route POST /api/user/google_login
 * @desc Login with Google endpoint
 * @access Public
*/
router.post('/google_login', userController.googleLogin)

/** 
 * @route POST /api/user/facebook_login
 * @desc Login with Facebook endpoint
 * @access Public
*/
router.post('/facebook_login', userController.facebookLogin)


module.exports = router;