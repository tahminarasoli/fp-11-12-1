const express = require('express');

const router = express.Router();
const HomeRouter = require('./home');


// Only "/api" endpoint

/**
 * @route /api/home
 * @desc route for home
*/
router.use("/home", HomeRouter);

module.exports = router;