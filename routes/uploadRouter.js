const express = require("express");
const router = express.Router();

const uploadImage = require("../middleware/uploadImage.js");
const uploadController = require("../controllers/uploadController.js");
const auth = require("../middleware/auth.js");

// Only "/api" endpoint

/**
 * @route /api/upload_avatar
 * @desc route for user
 */
router.post("/", uploadImage, auth, uploadController.uploadAvatar);

module.exports = router;
