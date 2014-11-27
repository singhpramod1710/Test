/**########## External Modules ################**/ // external modules
var express = require('express');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var sessionParser = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/**########## App ################**/
var app = express();
var port = process.env.PORT || 3030; // set port with $PORT environment variable

/**########## App Configurations ################**/
app.use(cookieParser());
app.use(sessionParser({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false, //research on this
    saveUninitialized: false
}));
//these 2 must come after registering cookie.body and session middlewares
app.use(passport.initialize());
app.use(passport.session());

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded

app.set('view engine', 'ejs');
app.listen(port);
app.use(express.static(__dirname + '/../www'));

/**##########Internal modules ################**/
var db = require('./config/db.js'); // for the db config, this is ignored by git
mongoose.connect(db.url);
require('./config/passport.js')(passport);
require('./routes/appRoutes.js')(app, passport);
require('./routes/pathRoutes.js')(app);

module.exports = app;
console.log('Now serving on port: ', port);