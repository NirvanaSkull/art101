// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables

var endpoint = "https://api.nasa.gov/planetary/apod";

function getAjax() {
  $.ajax({
    url: endpoint,
    type: "GET",
    data: {
      api_key: "UKRYndsS901ogikFzmQ07AQXjJy7g4bHvxAkZoU4",
      count:1
    }
  })
.done(function(data){
  console.log("worked!");
  var firstAPOD = data[0];
  console.log(firstAPOD);
  var title = firstAPOD.title;
  var descr = firstAPOD.explanation;
  var imgUrl = firstAPOD.url;
console.log(title, descr, imgUrl);
$("#output").append("<h3>"+ title + "</h3>");
$("#output").append("<img src= " + imgUrl + ">");
$("#output").append("<p>" + descr + "</p>");
})

.fail(function(request, error){
  $("#output").html("Something.");
})
}


$("button").click(getAjax)
