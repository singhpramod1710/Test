controllers.controller('LoginCtrl', ['$scope','$state','LoginServices',function($scope,$state,LoginServices) {
    console.log('hello from login ctrl');
    $scope.processClick = function(user) {
        var loginResult = LoginServices.LoginServices();

        var success = function() {
          console.log('inside login success');
            $state.go('one');
        };
        var error = function() {
          console.log('inside login error');
            $state.go('login');
        };
        console.log(loginResult);
        console.log(user.number);
        console.log(user.password);
        LoginServices.login(user).then(success, error);
    };
}]);