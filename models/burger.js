
// Export connection for our ORM to use.
var orm = require("../config/orm.js");

var burger = {
  
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  
  create: function(burgerObj, cb) {
    orm.create(burgerObj, function(res) {
      cb(res);
    });
  },

  update: function(burgerObj, cb) {
    orm.updateOne(burgerObj, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
