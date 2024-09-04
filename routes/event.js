const express = require("express");
const router = express.Router();
const event = require("../controllers/event.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("/",checkAuth, event.getEvents);
router.get("/oneEvent/:id",checkAuth, event.getEvent);
router.get("/Events/:id",checkAuth, event.SearchEvent);
//router.get("/invitations/:id",checkAuth, event.SendInvitations);
router.post("/",checkAuth, event.createEvent); 
router.put("/event/:id",checkAuth, event.editEvent);
//router.put("/photo/:id",checkAuth(), event.putPhotoProfile);
router.delete("/:id",checkAuth, event.deleteEvent);

module.exports = router 