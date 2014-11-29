angular.module('ionicApp', [
  'ionic',
  'ui.router',
  'ui.bootstrap',
  'states',
  'app.services',
  'app.controllers',
  'app.directives',
]).run(['$ionicPlatform','$state','$rootScope','$http','$ionicLoading','LoginServices',function($ionicPlatform,$state, $rootScope,$http,$ionicLoading,LoginServices) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


// on state change you want to check whether or not the state.
  // I'm trying to reach is protected
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    console.log('state change start from :'+fromState.url+' to : '+toState.url);
    console.log('isLoggedIn : '+LoginServices.isLoggedIn());
   /*
    $ionicLoading.show({
      template: 'Loading...'
    });*/
  if(toState.authenticate && !LoginServices.isLoggedIn()){
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault();
    }
  });

  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
    //$ionicLoading.hide();
    console.log('state change success');
  });
}]);

var services    = angular.module('app.services',[]);
var controllers = angular.module('app.controllers',[]);
var directives  = angular.module('app.directives',[]);
