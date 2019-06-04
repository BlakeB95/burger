$(document).ready(function() {
    
  $('.ripple-background').css('max-height', '100%');
  $('.ripple-background').css('max-height', screen.height);



  $(".devour").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
   });

   $(".regurgitate").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/devoured/" + burger_id
    }).then(function(data) {
      // reload page to display regurgitated burger in proper column
      location.reload();
    });
   });
});
