

$(document).on("click", ".add", function(){
 
  event.preventDefault();

  var string = $(this).parent().text();

  var trim = string.split('Add to collection!').join('');

  console.log(trim);
  // $.post("/api/media")

  $.ajax({
    url: "https://www.omdbapi.com/?t=" + trim + "&y=&plot=short&apikey=trilogy",
    method: "GET"
  }).then(function(response){
    console.log(response);

    var media = {
      imageurl: response.Poster,
      media_name: response.Title,
      description: response.Plot,
      release_yr: response.Released,
      creator_ID: 1
    }
    console.log(media);
    
    postMedia(media);

  })

})

function postMedia(media){
  $.post("/api/media", media, function(){
      
  });
}



$(".srcBut").on("click", function(event) {
   $("#srcRes").empty();
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var movie = $("#movie").val();
  
    var movieArr = [];

    // Here we construct our URL
    

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: "https://www.omdbapi.com/?s=" + movie + "&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    //   <div class="card  col-lg-3 col-md-3 col-sm-12" id = "movies-view">
    //   <img class="card-img-top"
    //     src="https://lumiere-a.akamaihd.net/v1/images/tros-hero-in-theaters-mobile-a_e8a421c0.jpeg?region=0,0,1024,626&width=960"
    //     alt="Card image cap">
    //   <div class="card-body">
    //     <p class="cardText title">Name</p>
    //     <p class="cardText rating">Rating</p>
    //     <p class="cardText description">Description</p>
    //     <p class="cardText cast&Crew">Cast & Crew</p>
    //     <a href="#" class="card-link">More Movie Detail</a>
    //   </div>
    // </div>
    for (var i = 0; i < 10; i++){  
      
      
      
      $("#srcRes").append("<div class='rmv card movieCards col-lg-3 col-md-3 col-sm-12'>")
      
      $(".movieCards").append("<img class = 'card-img-top' src = " + response.Search[i].Poster + " alt = 'card img'>")
                      .append("<div class = 'card-body'>")
                      .append("<p class = 'cardText title'> " + response.Search[i].Title)
                      .append("<button type = 'submit' class = 'add' >Add to collection!</button>");
      
      $(".rmv").removeClass("movieCards");

      
                     
    }
      // .append(JSON.stringify(response));

      // $("#movie-view").text(response.Title);
    });

    // -----------------------------------------------------------------------
});


