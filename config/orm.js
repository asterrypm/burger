// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
     //selectAll()
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(burgerObj, cb) {
    var queryString = "INSERT INTO burgers SET ?";
    { burger_name: "Big Mac" }
    var params = burgerObj;
    connection.query(queryString, params, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(burgerObj, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    var params = [{ devoured: burgerObj.devoured }, { id: burgerObj.id}];
    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
