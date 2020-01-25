$("#searchMovieBut").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var movie = $("#movieSearchInput").val();

    // Here we construct our URL
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);




      $("#movie-view").append(JSON.stringify(response));

      // $("#movie-view").text(response.Title);
    });

    // -----------------------------------------------------------------------

    function renderButtons() {
        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#movies-view").empty();
        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {
          
          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var newButton = $("<button>");
          // Adding a class
          newButton.addClass("movie");
          // Adding a data-attribute with a value of the movie at index i
          newButton.attr("data-name", movies[i]);
          // Providing the button's text with a value of the movie at index i
          newButton.text(movies[i]);
          // Adding the button to the HTML
          $("#movies-view").append(newButton);
        }
      }

      // This function handles events where one button is clicked
      $("#searchMovieBut").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var movie = $("#movieSearchInput").val().trim();
        // The movie from the textbox is then added to our array

        movies.push(movie);
        
        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();


  });