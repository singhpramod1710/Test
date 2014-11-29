var appController = require('../controllers/appController.js');

module.exports = function(app,passport) {
    //ROUTES defined
    //app.post('/api/signin', passport.authenticate('local-login'), appController.signin);
    app.post('/api/login',passport.authenticate('local-login'),appController.login);
    app.get('/', appController.index);
    app.get('/logintest', appController.logintest);
};