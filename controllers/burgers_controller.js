
//import Express and burger.js
var express = require("express");
var connection = require("../models/burger.js");

var router = express.Router();

//Also inside `burger.js`, create the code that will call 
//the ORM functions using burger specific input for the ORM.

// Export router.
module.exports = router;