const express = require("express");
const router = express.Router();

const helpController = require('../controllers/helpController.js')
const auth = require('../middleware/auth.js')


// Only for /api/help

/** 
 * @route GET /api/help/getAllHelps
 * @desc Get all helps endpoint
 * @access Private
*/
router.get("/getAllHelps", auth, helpController.getHelps);

/** 
 * @route POST /api/help/create
 * @desc Create help endpoint
 * @access Private
*/
router.post("/create", auth, helpController.createHelp);

/** 
 * @route PATCH /api/help/update/:id
 * @desc Update help endpoint
 * @access Private
*/
router.patch("/update/:id", auth, helpController.updateHelp);

/** 
 * @route DELETE /api/help/delete/:id
 * @desc Delete help endpoint
 * @access Private
*/
router.delete("/delete/:id", auth, helpController.deleteHelp);

module.exports = router;
