angular.module('state.login',[]).config( function ($stateProvider) {
  $stateProvider.state("login", {
    url: "/login",
    controller: "LoginCtrl",
    templateUrl: "templates/state.login.ejs",
  });
});