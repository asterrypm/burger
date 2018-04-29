$(function () {

  $('#add-burger').on("click", function () {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("New Burger added");
        location.reload();
      }
    );
  });

  $('.js-devour-handler').on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devoured = {
      devoured: true
    };

    $.ajax("/api/burgers/devoured/:id", {
      type: "PUT",
      data: devoured
    }).then(
      function () {
        console.log("devoured burger");
        location.reload();
      }
    );
  });
});