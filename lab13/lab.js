// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables
/*

 // Define Variables
 function fizzBussBoom(maxNums,factorObj){
   for (var num0; num<maxNums; num++){
     var outputStr = "";
     for (var factor in factorObj){
       if (num % factor == 0){
         outputStr += factorObj [factor];
       }
     }
     if (outputStr){
       outputStr = " - " + outputStr + "!"
     }
     outputToPage(num.toString() + outputStr)
   }
 }
 function reportError(str){
   output.innerHTML = "<div class= 'error'>" + str + "</div>"

 }
 document.getElementById("submit").addEventListener('click', function(){
   var max = $("max").value;
   if (! max) {
     reportError("You Must Provide A Maximum");
   }
 })




 for (i=1; i <= 100; i++) {
     if (i%15 == 0) {
         document.writeLn("FizzBuzz");
     } else if (i%3 == 0) {
         document.writeLn("Fizz");
     } else if (i%5 == 0) {
         document.writeLn("Buzz");
     } else if (i%7 == 0) {
         document.writeLn("Buzz");
     } else {
         document.writeLn(i);
     }
 }

 var str = 0
 str += "Fizz";
 $("#output").append("<p>" + str + "</p>");

 while (str) {
     document.writeLn("FizzBussBoom " + str);
 	str++;
 }
