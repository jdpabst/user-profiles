angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {

	$scope.getFriends = function(){
		friendService.getFriends().then(function(response){
			console.log(response);
			$scope.friends = response.data.friends;
			$scope.currentUser = response.data.currentUser;
		})
	}

	$scope.getFriends();
});