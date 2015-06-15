// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'access' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'access.services' is found in services.js
// 'access.controllers' is found in controllers.js
angular.module('access', ['ionic', 'access.controllers', 'access.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // setup an abstract state for the tabs directive
  .state('tabsHome', {
    url: "/tabsHome",
    abstract: true,
    templateUrl: "templates/tabsHome.html"
  })

  // Each tab has its own nav history stack:
  
  .state('tab.logIn', {
    url: '/logIn',
    views: {
      'tab-logIn': {
        templateUrl: 'templates/tab-logIn.html',
        controller: 'LogInCtrl'
      }
    }
  })

  .state('tab.signUp', {
    url: '/signUp',
    views: {
      'tab-signUp': {
        templateUrl: 'templates/tab-signUp.html',
        controller: 'SignUpCtrl'
      }
    }
  })

  .state('tab.forgotPassword', {
    url: '/forgotPassword',
    views: {
      'tab-forgotPassword': {
        templateUrl: 'templates/tab-forgotPassword.html',
        controller: 'ForgotPasswordCtrl'
      }
    }            
  })

  .state('tabsHome.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })  

  .state('tabsHome.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })  

  .state('tabsHome.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  }) 

  .state('tabsHome.buy', {
    url: '/account/buy',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-buy.html',
        controller: 'BuyCtrl'
      }
    }
  })  

  .state('tabsHome.gain', {
    url: '/account/gain',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-gain.html',
        controller: 'GainCtrl'
      }
    }
  })

  .state('tabsHome.charge', {
    url: '/home/charge',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-charge.html',
        controller: 'ChargeCtrl'
      }
    }
  }) 

  .state('tabsHome.historyDetail', {
    url: '/account/historyDetail',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-historyDetail.html',
        controller: 'HistoryDetailCtrl'
      }
    }
  })

  .state('tabsHome.eventsDetail', {
    url: '/home/eventsDetail',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-eventsDetail.html',
        controller: 'EventsDetailCtrl'
      }
    }
  })  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/logIn');
});
