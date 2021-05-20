const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const uploadRouter = require('./uploadRouter');
const helpRouter = require('./helpRouter')

// Only "/api" endpoint

/**
 * @route /api/user
 * @desc route for user
*/
router.use("/user", userRouter);

/**
 * @route /api/upload_avatar
 * @desc route for user
*/
router.use("/upload_avatar", uploadRouter);

/**
 * @route /api/help
 * @desc route for help
*/
router.use("/help", helpRouter);



module.exports = router;