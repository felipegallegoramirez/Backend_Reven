const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller")
const {checkAuth , checkpermision} = require('../midleware/authverify')
const { uploadpdf, uploadimage } = require("../utils/savestorage")

router.get("/", user.getUsers);
router.post("/", user.createUser);
router.get("/search/", user.SearchUser);
router.get("/teacher/", user.getUsersTeacherService);
router.get("/service/:id", user.getUsersService);
router.get("/unique/:id", user.getUser); 
router.get("/rol/:email", user.putRolUser);
router.get("/rolTeacher/:id", user.putRolTeacherUser)
router.put("/editUser/:id",user.editUser);
router.put("/putPassword/:id", user.putPassword);
router.delete("/:id", user.deleteUser);
router.get("/sendCode/:email", user.SendCode);
router.put("/updateIMG/:id",uploadimage.single("image"), user.putPhotoProfile);
router.put("/updatePDF/:id",uploadpdf.single("pdf"), user.putPdfProfile);

module.exports = router 