var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var db = require("./app/models");

// Import routes and give the server access to them.
<<<<<<< HEAD
require("./app/routes/api-routes")(app);
=======
require("./app/routes/api-routes.js")(app);
>>>>>>> c07dd0dc336f5ec59c42e6e9b17ac6b44cd1733a
require("./app/routes/html-routes")(app);

// Static directory to be served
app.use(express.static("app/public"));

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
