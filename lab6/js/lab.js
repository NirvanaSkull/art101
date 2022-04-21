// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables
var myMainRide = {
    make : "Ford",
    model : "Taurus",
    color : "Rusty",
    year : 1995,
    age : function() {
    return 2019 - age;
    }
}

var myTransport = ["Ford Taurus", "Bike", "Ride from friedns", "Lime Scooter"]

console.log("Kind of transportion I use:", myTransport);

console.log("My Main Ride:", myMainRide);

// output
document.writeln("Kinds of transportion I use: ", myTransport, "<br>")

document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'))
