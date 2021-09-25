$('.carousel').carousel();

//called on page load
$(document).ready(function() {
  $(".teamButton").on("click", teamSelect);
  $("#BSAE").hide();
  $("#Supermileage").hide();
  $("#FSAE").show();
});

function teamSelect(event) {
  console.log($("#supermileageButton"));
  //Hide the text sections
  $("#FSAE").hide();
  $("#BSAE").hide();
  $("#Supermileage").hide();

  //unselect all buttons
  $("#formulaButton")[0].className = $("#formulaButton")[0].className.replace(" active", "");
  $("#bajaButton")[0].className = $("#bajaButton")[0].className.replace(" active", "");
  $("#supermileageButton")[0].className = $("#supermileageButton")[0].className.replace(" active", "");

  //highlight clicked button
  event.currentTarget.className += " active";

  //show section corresponding to the clicked button
  if (event.currentTarget.id === "formulaButton") {
    $("#FSAE").show();
  } else if (event.currentTarget.id === "bajaButton") {
    $("#BSAE").show();
  } else if (event.currentTarget.id === "supermileageButton") {
    $("#Supermileage").show();
  }
}