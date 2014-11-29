angular.module('states', [
        'state.one',
        'state.login',
    ])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("/home", {
            url: "/home",
            templateUrl: "templates/home.html",
            authenticate:false
        });

        $urlRouterProvider.otherwise('/home');
    }]);