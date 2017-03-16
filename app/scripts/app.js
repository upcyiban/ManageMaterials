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
    'ngSanitize'
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
  .run(function ($rootScope) {
    $rootScope.meterials = [];
    $rootScope.detail_meterail = [];
    $rootScope.url = 'http://yb.upc.edu.cn:8087';
  });
//时间戳转时间
function timetrans(date){
  var date = new Date(date);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes());
  return Y+M+D+h+m;
}
//易班验证
function verification($http,$rootScope) {
  var APPID = "f87c99a7211f2a44";
  var CALLBACK = "http://f.yiban.cn/iapp96401";
  var url2 = window.location.href;
  window.location.href = "https://openapi.yiban.cn/oauth/authorize?client_id=" + APPID + "&redirect_uri=" + CALLBACK + "&display=html";
  if (url2.indexOf("verify_request") != -1) {
    var vq = window.location.href.split('=')[1].split('&')[0];
    console.log(vq);
    if (vq != '') {
      $http.get($rootScope.url + '/material/auth?vq=' + vq);
    }
  }
}

