// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables



var endpoint = "https://worldwind.arc.nasa.gov/worldweather/";

function getAjax() {
  $.ajax({
    url: endpoint,
    type: "GET"
  })
.done(function(data){
  $("#output").html(data);
})
.fail(function(request, error){
  $("#output").html("Something.");
})
}

$("button").click(getAjax)
