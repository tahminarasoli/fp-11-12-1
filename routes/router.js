const express = require('express');

const router = express.Router();

const HomeRouter = require('./home');
const AuthRouter = require('./AuthRouter');

// Only "/api" endpoint

/**
 * @route /api/home
 * @desc route for home
*/
router.use("/home", HomeRouter);
/**
 * @route /api/user
 * @desc route for user
*/
router.use("/user", AuthRouter);


module.exports = router;