const router2 = require('express').Router();
const Parameter2contoller = require("../controller/Parameter2_controller");
const { CreateParameter2 } = require('../services/Parameter2_service');



router2.post('/storeParameter2', Parameter2contoller.createParameter2);

module.exports = router2;