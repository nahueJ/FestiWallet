angular.module('access.controllers', ['ionic','ngCordova'])

.controller('LogInCtrl', function($scope, $state, $http) {
  
	$scope.user = {};

	$scope.logIn = function(user) {
	
		$http.get('http://localhost:3000/users/'+user.userNickname).success(function(data) {
			//verification on DB and send to Home page
			var pass= String(data.userPassword);
			var nick= String(data.userNickname);
      		if (pass==user.userPassword){
      			$state.go('tabsHome.home', { 'userNickname': nick });
      		}
    	});		
	};
})

.controller('SignUpCtrl', function($scope, $state, $http) {
  
	$scope.user = {};
	$scope.verification = {};

	$scope.signUp = function(user,verification) {
		if(user.userPassword==verification.password){
			//add to de DB and send to logIn page 
			$http.post('http://localhost:3000/users',{
				"userNickname": user.userNickname, 
				"userName": user.userName,
				"userSurname": user.userSurname,
				"userEmail": user.userEmail,
				"userPassword": user.userPassword,
				"userCurrency": 0.0
			}).
			success(function() {
			    $state.go('tab.logIn');
		  	}).
		  	error(function() {
			    console.log("Nickname already used");
		  	});
		}
	};
})

.controller('ForgotPasswordCtrl', function($scope) {})

.controller('HomeCtrl', function($scope, $state, $stateParams, $http) {
	$scope.user= {};
    $http.get('http://localhost:3000/users/'+$stateParams.userNickname).success(function(data) {
		$scope.user=data;
		
	});		

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

.controller('GainCtrl', function($scope, $cordovaBarcodeScanner, $cordovaSms) {
	$scope.leerCodigo = function () {
		$cordovaBarcodeScanner.scan().then (function(imagenEscaneada){
			alert(imagenEscaneada.text);
		}, function(error){
			alert("Ha ocurrido un error: "+error);
		});
	}

	$scope.enviarSMS = function(){
    	$cordovaSms.send('phonenumber', 'SMS content', options).then(function() {
        	alert(phonenumber);
      	}, function(error) {
        	alert(phonenumber);
      	});
    }
})


.controller('HistoryDetailCtrl', function($scope) {})

.controller('EventsDetailCtrl', function($scope) {})

.controller('SendCtrl', function($scope) {})