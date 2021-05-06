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
 * @route /api/auth
 * @desc route for auth
*/
router.use("/auth", AuthRouter);


module.exports = router;