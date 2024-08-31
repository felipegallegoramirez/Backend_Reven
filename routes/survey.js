const express = require("express");
const router = express.Router();
const survey = require("../controllers/survey.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("",checkAuth, survey.getSurveys);
router.get("/oneSurvey/:id",checkAuth, survey.getSurvey);
router.post("",checkAuth, survey.createSurvey); 
router.put("/survey/:id",checkAuth,survey.editSurvey);
//router.put("/photo/:id",checkAuth, survey.putPhotoProfile);
router.delete("/:id",checkAuth, survey.deleteSurvey);

module.exports = router 