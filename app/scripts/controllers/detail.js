'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the manageMaterialsApp
 */
angular.module('manageMaterialsApp')
  .controller('DetailCtrl', function ($rootScope, $scope, $http) {
    console.log($rootScope.detail_meterail);
    $http.post($rootScope.url + '/material/getOneMaterial', $rootScope.detail_meterail.id)
      .then(function (data) {

    });
  });
