
// On ready
$(function() {
  // Handle Post Requests For new burgers
  $('#add-burger').on("click", function() {
    event.preventDefault();
    // make an object with that burger's name inside of it
  var newBurger = {
    burger_name: $("#burger-name").val().trim()
  }
  };
    // do a post request with jquery
  $.ajax("/api/burgers/add", {
    type: "POST",
    data: newBurger
  }).then (
    function() {
      console.log("New Burger added");
      location.reload();
    }
  });

  // Handle PUT request for devoured burgers
  $('.js-devour-handler').on("click", function(event) {
    event.preventDefault();
    // get the data-id attributes value from the button
    var id = $(this).data("id");

    // compose an object with the id inside of it
    var devoured = {
      devoured: true
    };
    // do a put request with jquery
    $.ajax("/api/burgers/devoured/:id", {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        console.log("devoured burger");
        location.reload();
      }

  });
 });
