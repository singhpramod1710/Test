angular.module('states', [
        'state.one',
        'state.login',
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("/home", {
            url: "/home",
            templateUrl: "templates/home.html"
        });

        $urlRouterProvider.otherwise('/home');
    });