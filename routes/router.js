const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const uploadRouter = require('./uploadRouter');


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


module.exports = router;