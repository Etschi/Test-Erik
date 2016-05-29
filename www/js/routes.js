angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('willkommen', {
    url: '/page1',
    templateUrl: 'templates/willkommen.html',
    controller: 'willkommenCtrl'
  })

  .state('startseite', {
    url: '/page2',
    templateUrl: 'templates/startseite.html',
    controller: 'startseiteCtrl'
  })

  .state('messwerte', {
    url: '/page3',
    templateUrl: 'templates/messwerte.html',
    controller: 'messwerteCtrl'
  })

  .state('notfall', {
    url: '/page4',
    templateUrl: 'templates/notfall.html',
    controller: 'notfallCtrl'
  })

  .state('medikamente', {
    url: '/page5',
    templateUrl: 'templates/medikamente.html',
    controller: 'medikamenteCtrl'
  })

  .state('notizen', {
    url: '/page6',
    templateUrl: 'templates/notizen.html',
    controller: 'notizenCtrl'
  })

  .state('erinnerungen', {
    url: '/page7',
    templateUrl: 'templates/erinnerungen.html',
    controller: 'erinnerungenCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});