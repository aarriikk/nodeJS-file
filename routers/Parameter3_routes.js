const router3 = require('express').Router();
const Parameter3contoller = require("../controller/Parameter3_controller");
const { CreateParameter3 } = require('../services/Parameter3_service');



router3.post('/storeParameter3', Parameter3contoller.createParameter3);

module.exports = router3;