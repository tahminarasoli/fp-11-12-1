const express = require('express');
const router = express.Router();

const sendController = require('../controllers/sendController.js');
const auth = require("../middleware/auth.js");

// Only for /api/send

/** 
 * @route POST /api/send/mail
 * @desc Sendmail endpoint
 * @access Public
*/
router.post("/mail", sendController.sendMethod);

module.exports = router;