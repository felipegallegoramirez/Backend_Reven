const express = require("express");
const router = express.Router();
const claims = require("../controllers/claims.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("",checkAuth, claims.getClaimss);
router.get("/oneClaims/:id",checkAuth, claims.getClaims);
router.post("",checkAuth, claims.createClaims); 
router.put("/claims/:id",checkAuth,claims.editClaims);
//router.put("/photo/:id",checkAuth(), claims.putPhotoProfile);
router.delete("/:id",checkAuth, claims.deleteClaims);

module.exports = router 