var express = require("express");
var path = require('path');
// var exphbs = require('express-handlebars');
// var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require("./app/models");



var app = express();

var PORT = process.env.PORT || 8080;



// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Method override.
app.use(methodOverride('_method'));

// Import routes and give the server access to them.
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes")(app);

// Static directory to be served
app.use(express.static("app/public"));

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
