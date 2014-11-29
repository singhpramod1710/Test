services.service('LoginServices', function($http, $q,Constants) {

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
                deferred.resolve(response.payload.user);
            }).error(function(error) {
                console.log('Error login');
                deferred.reject(error);
            });
            return deferred.promise;
        }
    };
});