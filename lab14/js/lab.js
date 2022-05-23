// Summary. (use period)
// Description. (use period)
// @link   URL
// @file   This files defines the MyClass class.
// @author Junbo Wang.
// @since  2022.4.8

// Define Variables

$("#activate").click(function(){

$.ajax({
    // The URL for the request (from the api docs)
    url: "http://numbersapi.com/random/date",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            api_key: "activate",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        document.write(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        document.write("Error:", textStatus, errorThrown);
    }
})
}
