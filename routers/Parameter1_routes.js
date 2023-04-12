const router1 = require('express').Router();
const Parameter1contoller = require("../controller/Parameter1_controller");
const { CreateParameter1 } = require('../services/Parameter1_service');



router1.post('/storeParameter1', Parameter1contoller.createParameter1);

module.exports = router1;