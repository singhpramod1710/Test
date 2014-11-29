services.service('LoginServices', ['$http','$q','$window','Constants',function($http, $q,$window,Constants) {

    return {
        LoginServices: function() {
            return "from LoginServices";
        },
        login: function(userData) {
            var deferred = $q.defer();
            $http.post(Constants.API.baseUrl+'/api/login', {
                number: userData.number,
                password: userData.password
            }).success(function(response) {
                console.log('success login');
                console.log('User logged in : ' + response.payload.user);
                //save user into seesion
                $window.sessionStorage.token = response.payload.user;
                deferred.resolve(response.payload.user);
            }).error(function(error) {
                console.log('Error login');
                //remove user if any are present in session
                delete $window.sessionStorage.token;
                deferred.reject(error);
            });
            return deferred.promise;
        },

        isLoggedIn: function(){
            if($window.sessionStorage.token){
                return true;
            }
            return false;
        },

        logout: function(){
            //TODO remove session storage delete $window.sessionStorage.token;
        }
    };
}]);