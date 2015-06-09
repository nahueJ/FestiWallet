angular.module('access.controllers', [])

.controller('LogInCtrl', function($scope, $state) {
  
	$scope.user = {};

	$scope.logIn = function(user) {

		console.log(user.userNickname);
		console.log(user.userPassword);
		//verification on DB and send to Home page
		$state.go('tabsHome.home');
	};
})

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

.controller('ForgotPasswordCtrl', function($scope) {})

.controller('HomeCtrl', function($scope, $state) {
  
	$scope.logOut = function() {
		$state.go('tab.logIn');
	};
})

.controller('AccountCtrl', function($scope, $state) {

 //  	$scope.lookForHistory = function() {
 //  		console.log("going");
 //    	$state.go('historyDetail');
	// };
})

.controller('SettingsCtrl', function($scope) {})

.controller('BuyCtrl', function($scope) {})

.controller('HistoryDetailCtrl', function($scope) {})

.controller('EventsDetailCtrl', function($scope) {})


var qrcode = new QRCode("qrcode");

function makeCode () {		
	var elText = document.getElementById("text");
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});