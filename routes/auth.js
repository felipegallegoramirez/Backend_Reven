const express = require('express');
const router = express.Router();
const {loginUserSchema} = require('../midleware/schemas/user.schema');
const validatorHandler = require('../midleware/verificatorSchemas')
const auth = require('../controllers/login.controller');

router.post("/", auth.loginCtrl);

module.exports = router