angular.module('access.controllers', [])

.controller('LogInCtrl', function($scope, $state) {
  
  // $scope.logIn = function(user) {
  $scope.logIn = function() {
    // console.log('Sign-In', user);
    $state.go('tabsHome.home');
  };
})


.controller('SignUpCtrl', function($scope) {})

.controller('HomeCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {})
