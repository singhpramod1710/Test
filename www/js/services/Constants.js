services.service('Constants', function() {
  var _API = {
    baseUrl: "http://localhost:3030"
  };

//Define uour constants here
  var constants = {
    DEBUGMODE : false,
    SHOWBROADCAST_EVENTS : true,
    API: _API
  };



  return constants;
});