'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the manageMaterialsApp
 */

angular.module('manageMaterialsApp')
  .controller('MainCtrl', function ($scope, $http,$rootScope,$location,$window) {
    $http.get($rootScope.url+'/material/auth?vq=' + verification()).then(function (response) {
        if(response.data ==1){
          setTimeout(function () {
            $window.stop();
          },300);
        }
    });
    $http.get($rootScope.url+'/material').then(function (response) {
      $scope.meterials = response.data;
    });
    $scope.col = 'name';//默认按name列排序
    $scope.desc = 0;//默认排序 降序
    $scope.orderButton = function (attr) {
      $rootScope.orderId = attr.meterial.id;
      $rootScope.orderName = attr.meterial.name;
      $rootScope.orderOrganization = attr.meterial.organization;
      $rootScope.orderDescription = attr.meterial.description;
      $location.path('/order');
    };
    $rootScope.meterials = $scope.meterials;
  });

