$(function() {
    $('#otherMajorDiv').hide();
    $('#majorSelect').change(function(){
        if($('#majorSelect').val() == 'Other') {
            $('#otherMajorDiv').show();
            $('#otherMajorTextInput').prop('required',true);
        } else {
            $('#otherMajorDiv').hide();
            $('#otherMajorTextInput').prop('required',false);
            $('#otherMajorTextInput').val('');
        }
    });
});

$('#contact_form').submit(function(e) {
  console.log("testing1");
    e.preventDefault();
    //if (token == '')
      //token = doCheck();
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLScrmCTT32IRIvhx7CA4stHZwWbq-NIM8_7pjtFOyoR5kc2m4w/formResponse",
        data: $(this).serialize(),
        type: "GET",
        dataType: "jsonp",
        crossDomain: true,
    });
    $('#success_message').show();
    console.log("testing2");
});
