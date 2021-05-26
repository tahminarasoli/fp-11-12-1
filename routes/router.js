const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const uploadRouter = require('./uploadRouter');
const sendRouter = require('./sendRouter');
const helpRouter = require('./HelpRouter')

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


/**
 * @route /api/send
 * @desc route for send
*/
router.use("/send", sendRouter);



module.exports = router;