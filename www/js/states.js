angular.module('states',[
  'state.one',
  'state.login',
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("/home",{
    url: "/home",
    template: "home"
  });

  $urlRouterProvider.otherwise('/home');
});
