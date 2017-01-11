$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#first-name").val();
    var lastNameInput = $("input#last-name").val();
    var streetAddressInput = $("input#street-address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipcodeInput = $("input#zipcode").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);


    $("#story").show();

    event.preventDefault();
  });
});
