angular.module('access.controllers', [])

.controller('SignUpCtrl', function($scope, $state) {
  
  // $scope.signIn = function(user) {
  //   console.log('Sign-In', user);
  //   $state.go('tabs.home');
  // };
  
})

.controller('LogInCtrl', function($scope, $state) {
  
  // $scope.logIn = function(user) {
  $scope.logIn = function() {
    // console.log('Sign-In', user);
    $state.go('tabsHome.home');
  };
})

.controller('HomeCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {})
