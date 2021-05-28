const express = require('express');
const router = express.Router();

const sendController = require('../controllers/sendController.js');

// Only for /api/send

/** 
 * @route POST /api/send/mail
 * @desc Sendmail endpoint
 * @access Public
*/
router.post("/mail", sendController.sendMethod);

/** 
 * @route POST /api/send/mailForContact
 * @desc SendContactMail endpoint
 * @access Public
*/
router.post("/mailForContact", sendController.sendMethodForContact);

module.exports = router;