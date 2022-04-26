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

document.writeln("Oh hey, I've fixed you name: ", sortUserName(), "</br>");
