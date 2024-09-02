const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("/",checkAuth, user.getUsers);
router.get("/oneUser/:id",checkAuth, user.getUser);
router.get("/code/:id",checkAuth, user.SendCode); 
router.post("/", user.createUser); 
router.put("/passsword/:id",checkAuth,user.putPassword);
router.put("/user/:id",checkAuth,user.editUser);
//router.put("/photo/:id",checkAuth, user.putPhotoProfile);
router.delete("/:id",checkAuth, user.deleteUser);

module.exports = router 