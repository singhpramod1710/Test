module.exports = {
    index: function(req, res) {
        console.log('Indide / route');
        /* res.sendfile('index.html', {
             root: __dirname + '/../../www/'
         });*/
        res.render(__dirname + '/../../www/index', {
            'title': 'hello ejs'
        });
    },
    signin: function(req, res) {
        console.log('dirName :' + __dirname);
        console.log('Inside appController | signin');
        console.log('URL : ' + req.url);
        console.log('Ref URL : ' + req.headers.referer);
        console.log('User : ' + req.user.id);
        console.log('session User : ' + req.session.passport.user);
        if (req.session.passport.user)
            res.redirect((req.headers.referer) ? req.headers.referer : '/');
        else
            res.redirect('/#/login');
    },
    login: function(req, res) {
        console.log('login api');
        var id = req.user.id;
        return res.json({
            payload: {
                user: id,
            },
            message: "Authentication successfull"
        });
    },
    logintest: function(req, res) {
        console.log('Inside appController | logintest');
        console.log('URL : ' + req.url);
        //console.log('session User : ' + req.session.passport.user);
        if (req.isAuthenticated())
            res.redirect('/');
        else
            res.redirect('/#/login');
    },

    loginCallback: function(err, user, info) {
        console.log('inside login callback');
        if (err) {
            return res.status(400).json({
                payload: {
                    error: err
                },
                message: info.message
            });
        }

        if (!user) {
            return res.status(400).json({
                payload: {
                    error: err
                },
                message: info.message
            });
        }

        //_authTokenRequestCb(user, req, res);

    },
};