
//import Express and burger.js
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // Get all burgers from the database
  burger.all(function(burgerArray) {
    // Compose object to pass to handlebars render engine
    var burgers = {
      burgers: burgerArray
    }
    // Pass object handlebars so it can be rendered
    res.render("index", burgers);
  });
});

router.post("/api/burgers/add", function(req, res) {
  var burgerObject = {
    burger_name: req.body.burger_name
  };
  burger.create(burgerObject, function(res) {
    res.status(200).send();
  });
});

router.put("/api/burgers/devoured/:id", function(req, res) {

  var updatedBurger = {
    id: req.params.id,
    devoured: true
  };
  console.log("updated burger", updatedBurger )

  burger.updateOne(updatedBurger).then(function(result) {
    console.log("REsult", result);
    res.redirect("/");
    
  });

});

// Export routes for server.js to use.
module.exports = router;
