const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController')

// Only for /api/user

/** 
 * @route POST /api/user/register
 * @desc Register endpoint
 * @access Public
*/

router.post("/register", AuthController.register)

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Public
*/

// router.post("/login", AuthController.authLogin)


module.exports = router;