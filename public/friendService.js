angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      return $http({
        method: 'POST',
        url: "/api/login",
        data: {
          name: user.name,
          password: user.password
        }
      })
    };

    this.getFriends = function() {
      return $http({
        method: 'GET',
        url: "/api/profiles"
      })
    };
  
});
