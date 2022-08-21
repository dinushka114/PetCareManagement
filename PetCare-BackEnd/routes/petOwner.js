var express = require('express');
var router = express.Router();
const petOwnerController = require("../controllers/petOwnner")

router.post("/register", petOwnerController.register);

module.exports = router;