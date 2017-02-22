'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the manageMaterialsApp
 */
angular.module('manageMaterialsApp')
  .controller('DetailCtrl', function ($rootScope, $scope) {
    console.log($rootScope.detail_meterail);
    $scope.borrowNumber = $rootScope.detail_meterail.borrowNumber;
    //$scope.
  });
