var passportLocal = require('passport-local');
module.exports = function(passport) {
    passport.use('local-login', new passportLocal.Strategy({
            // by default, local strategy uses username and password
            usernameField: 'number',
            passwordField: 'password'
        },
        function(username, password, done) {
            //if user valid done(err,userobj)
            console.log('inside local');
            console.log('UserName : ' + username);
            if (username === password) {
                console.log('Matched');
                done(null, {
                    id: username,
                    name: 'Pramod'
                });
            } else {
                //if invalid user
                done(null, null);
            }
        }));

    //passport serialize user into session
    passport.serializeUser(function(user, done) {
        //call the callback with just enough info so that we can re create the user if required
        //in our case db id will suffice
        console.log('pramod serializing ...');
        done(null, user.id);

    });

    passport.deserializeUser(function(id, done) {
        //Querry DB for the user using id
        console.log('pramod de-serializing ...');
        done(null, {
            id: id,
            name: 'Pramod'
        });
    });
};