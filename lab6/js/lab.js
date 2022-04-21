// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables
myMainRide = {
    make : "Ford",
    model : "Taurus",
    color : "Rusty",
    year : 1995,
    age : function() {
    return 2019 - age;
    }
}

myTransport = ["Ford Taurus", "Bike", "Ride from friends", "Lime Scooter"]


// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>")
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>";
