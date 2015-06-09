angular.module('access.controllers', [])

.controller('SignUpCtrl', function($scope, $state) {
  
  $scope.user = {};
  $scope.verification = {};

  $scope.signUp = function(user,verification) {
  	if(user.userPassword==verification.password){
	  	console.log(user.userNickname);
	    console.log(user.userName);
	    console.log(user.userSurname);
	    console.log(user.userEmail);
	    console.log(user.userPassword);
	  	//add to de DB and send to logIn page 
	    $state.go('tab.logIn');
  	}
  };
  
})

.controller('LogInCtrl', function($scope, $state) {
  
  $scope.user = {};

  $scope.logIn = function(user) {

		console.log(user.userNickname);
		console.log(user.userPassword);
		//verification on DB and send to Home page
    $state.go('tabsHome.home');
  };
})

.controller('HomeCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {})
