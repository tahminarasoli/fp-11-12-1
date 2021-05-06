const express = require("express");

const homeController = require('../controllers/home.js')

const router = express.Router();

// Only for /api/home

/** 
 * @route POST /api/home
 * @desc home endpoint
 * @access Public
*/

router.get("/", homeController.showHomePage );

module.exports = router;
