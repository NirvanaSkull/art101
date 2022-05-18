// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables



 for (i=1; i <= 100; i++) {
     if (i%15 == 0) {
         document.write("</p>" + "FizzBuzz" + "</p>");
     } else if (i%3 == 0) {
         document.write("</p>" + "Fizz" + "</p>");
     } else if (i%5 == 0) {
         document.write("</p>" + "Buzz" + "</p>");
     } else if (i%7 == 0) {
         document.write("</p>" + "Boom" + "</p>");

     } else {
         document.write("</p>" + "Bang" + "</p>");
     }
 }

 var str = 0
 str += "Fizz";
 $("#output").append("<p>" + str + "</p>");

 while (str) {
     document.write("FizzBussBoom " + str);
 	str++;
 }
