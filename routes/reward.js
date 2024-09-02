const express = require("express");
const router = express.Router();
const reward = require("../controllers/reward.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("/",checkAuth, reward.getRewards);
router.get("/oneReward/:id",checkAuth, reward.getReward);
router.post("/",checkAuth, reward.createReward); 
router.put("/reward/:id",checkAuth,reward.editReward);
//router.put("/photo/:id",checkAuth, reward.putPhotoProfile);
router.delete("/:id",checkAuth, reward.deleteReward);

module.exports = router 