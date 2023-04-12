const router4 = require('express').Router();
const Parameter4contoller = require("../controller/Parameter4_controller");
const { CreateParameter4 } = require('../services/Parameter4_service');



router4.post('/storeParameter4', Parameter4contoller.createParameter4);

module.exports = router4;