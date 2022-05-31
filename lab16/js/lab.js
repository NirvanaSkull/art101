// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables

var endpoint = "https://xkcd.com/info.0.json";

function getAjax() {
  $.ajax({
    url: endpoint,
    type: "GET",
    comicObj: {
      api_key:"",
      count:1
    }
  })
.done(function(data){
  console.log("worked!");
  var comicObj = data[0];
  console.log(comicObj);
  var title = data.title;
  var alt = data.alt;
  var img = data.img;
console.log(title, alt, img);
$("#output").append("<h3>"+ title + "</h3>");
$("#output").append("<img src= " + img + ">");
$("#output").append("<p>" + alt + "</p>");
})

.fail(function(request, error){
  $("#output").html("Something.");
})
}


$("button").click(getAjax)
