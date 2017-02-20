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
    'ngTouch',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .when('/manager', {
        templateUrl: 'views/manager.html',
        controller: 'ManagerCtrl',
        controllerAs: 'manager'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });

  })
  .run(function ($rootScope, $http, $location) {
    $rootScope.meterials = [];
    $rootScope.detail_meterail = [];
    $rootScope.url = 'http://localhost:8080';
    //易班认证
    // var APPID = "d3e9e3722272dc94";
    // var CALLBACK = "http://f.yiban.cn/iapp55289";
    // if ($location.search()['verify_request']) {
    //   $http.get('http://localhost:8080/second/auth/?vq=' + $location.search()['verify_request']);
    // }
    // else {
    //   window.location = 'https://openapi.yiban.cn/oauth/authorize?client_id=' + APPID + '&redirect_uri=' + CALLBACK + '&display=html';
    // }
  });
