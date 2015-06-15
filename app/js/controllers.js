angular.module('access.controllers', ['ionic','ngCordova'])

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

.controller('GainCtrl', function($scope, $cordovaBarcodeScanner, $cordovaSms) {

	angular.module('lector.controllers',['ionic', 'ngCordova'])
		$scope.leerCodigo = function(){
				$cordovaBarcodeScanner.scan().then (function(imagenEscaneada){
					alert(imagenEscaneada.text);
				}, function(error){
					alert("Ha ocurrido un error: "+error);
				});
			}

		$scope.enviarSMS = function(){
	    	$cordovaSms.send('phonenumber', 'SMS_content', options).then(function() {
	        	alert('Enviado a: '+phonenumber+' con el mensaje '+SMS_content);
	      	}, function(error) {
	        	alert(phonenumber);
	      	});
	    }
})

.controller('ForgotPasswordCtrl', function($scope, $cordovaEmailComposer) {
	
	angular.module('mail.controlles',['ionic', 'ngCordova'])
	 	$scope.enviarMail = function(){
			if(window.plugins && window.plugins.emailComposer){
			window.plugins.emailComposer.showEmailComposerWithCallback(function(result){
			  console.log("Email succes");
			},
			  "subject here",
			  "",
			  ["tincho_abr@hotmail.com.ar"],
			  null,
			  null,
			  false,
			  null,
			  null
			);
			}

	 		alert("Your mail was send");
			$cordovaEmailComposer.isAvailable().then(function() {
		 		alert("enviar un mail loco");
			}, function (error) {
				alert("Ha ocurrido un error: "+error);
			});
	 	}
	 	
	 	var email = {
		    to: 'tincho_abr@hotmail.com.ar',
		    cc: 'test',
		    bcc: ['john@doe.com', 'jane@doe.com'],
		    attachments: [
		      'file://img/logo.png',
		      'res://icon.png',
		      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
		      'file://README.pdf'
		    ],
		    subject: 'Cordova Icons',
		    body: 'How are you? Nice greetings from Leipzig',
		    isHtml: true
		};
})

.controller('HistoryDetailCtrl', function($scope) {})

.controller('EventsDetailCtrl', function($scope) {})

.controller('SendCtrl', function($scope) {})