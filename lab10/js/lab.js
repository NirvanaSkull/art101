// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me you name so I can fix it.");
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('')
  console.log("nameSorted =", nameSorted);
  return nameSorted
}

document.writeln("Here's your sorted name: ", sortUserName(), "</br>");
document.writeln("</br>")
document.writeln("And oh hey, I fixed your name.", "</br>");
document.writeln("Your new one is above");




var buttonEl = document.getElementById('my-button1');
buttonEl.addEventListener('click', function() {
	alert("You Been Redirected.");
  window.location.replace("https://www.youtube.com/channel/UCltrzXl9ZVwZEtjMBuyPpNg");
});
var buttonEl = document.getElementById('my-button2');
buttonEl.addEventListener('click', function() {
	alert("You Been Redirected.");
  window.location.replace("https://nirvanaskull.github.io/art101/");
});
var buttonEl = document.getElementById('my-button3');
buttonEl.addEventListener('click', function() {
	alert("You Been Redirected.");
  window.location.replace("https://www.google.com/");
});
