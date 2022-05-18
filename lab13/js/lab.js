// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables


  for (i=1; i <= 200; i++) {
      if (i%15 == 0) {
          document.write("</p>" + i + "- " + "FizzBuzz" + "</p>");
      } else if (i%3 == 0) {
          document.write("</p>" + i + "- " + "Fizz" + "</p>");
      } else if (i%5 == 0) {
          document.write("</p>" + i + "- " + "Buzz" + "</p>");
      } else if (i%7 == 0) {
          document.write("</p>" + i + "- " + "Boom" + "</p>");
      } else {
          document.write("</p>" + i + "- " + "Bang" + "</p>");
      }
  }

  var i = 0
  i += "Fizz";
  $("#output").append("<p>" + i + "</p>");

  while (i) {
      document.write("FizzBussBoom " + i);
   i++;
  }
