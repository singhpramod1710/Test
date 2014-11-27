// external modules
var express  = require('express');

// internal modules
var db       = require('./config/db.js'); // for the db config, this is ignored by git

var app = express();
app.set('view engine', 'ejs');
var port =  process.env.PORT || 3030; // set port with $PORT environment variable
var bodyParser = require('body-parser');
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded

app.listen(port);
app.use(express.static(__dirname + '/../www'));

require('./routes/appRoutes.js')(app);
require('./routes/pathRoutes.js')(app);

module.exports = app;
console.log('now serving on port: ', port);