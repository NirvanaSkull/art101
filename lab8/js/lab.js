// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables
function isEven(x){
  return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1))
console.log("Is 1 even? ", isEven(2))

array = [100, 81, 4,16, 42, 144, 10000]
document.writeln("My array:", array, "</br>");

var result = array.map(isEven);
//Should return
document.writeln("Evenness of array:", result, "</br>");

var result = array.map(function(x){
  return x ** 0.5;
})
document.writeln("Squareroot of array:", result, "</br>");
