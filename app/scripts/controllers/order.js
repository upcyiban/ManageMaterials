'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the manageMaterialsApp
 */
angular.module('manageMaterialsApp')
  .controller('OrderCtrl', function ($scope,$rootScope) {
    $scope.id = $rootScope.orderId ;
    $scope.name = $rootScope.orderName ;
    $scope.organization = $rootScope.orderOrganization ;
    $scope.description = $rootScope.orderDescription ;
  });
