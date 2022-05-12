// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 8) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
else {
  return "Hogwarts"
}
}


var buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', function(){
  var name = document.getElementById('input').value;
  var house = sortingHat(name);
  newText= "<p> The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
