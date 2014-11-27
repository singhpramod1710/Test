module.exports = {
    index: function(req, res) {
        console.log('Indide / route');
       /* res.sendfile('index.html', {
            root: __dirname + '/../../www/'
        });*/
    res.render(__dirname + '/../../www/index',{'title':'hello ejs'});
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
    logintest: function(req, res) {
        console.log('Inside appController | logintest');
        console.log('URL : ' + req.url);
        console.log('session User : ' + req.session.passport.user);
        if (req.session.passport.user)
            res.redirect('/');
        else
            res.redirect('/#/login');
    },
};