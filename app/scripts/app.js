'use strict';

/**
 * @ngdoc overview
 * @name manageMaterialsApp
 * @description
 * # manageMaterialsApp
 *
 * Main module of the application.
 */
angular
  .module('manageMaterialsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .otherwise({
        redirectTo: '/'
      });

  })
  .run(function ($rootScope) {
    $rootScope.meterials = [];
  });
