const express = require("express");
const router = express.Router();
const response = require("../controllers/response.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("",checkAuth, response.getResponses);
router.get("/oneResponse/:id",checkAuth, response.getResponse);
router.post("",checkAuth, response.createResponse); 
router.put("/response/:id",checkAuth,response.editResponse);
//router.put("/photo/:id",checkAuth, response.putPhotoProfile);
router.delete("/:id",checkAuth, response.deleteResponse);

module.exports = router 