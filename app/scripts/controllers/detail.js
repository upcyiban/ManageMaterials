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
    $scope.materialName = $rootScope.detail_meterail.materialName;
    $scope.materialOrganization = $rootScope.detail_meterail.materialOrganization;
    $scope.borrowerName = $rootScope.detail_meterail.borrowerName;
    $scope.borrowerNumber = $rootScope.detail_meterail.borrowerNumber;
    $scope.borrowNumber = $rootScope.detail_meterail.borrowNumber;
    $scope.creatTime = timetrans($rootScope.detail_meterail.creatTime);
    $scope.endTime = timetrans($rootScope.detail_meterail.endTime);
    $scope.status = $rootScope.detail_meterail.status;
    $scope.agree = $rootScope.detail_meterail.agree;
    $scope.return = $rootScope.detail_meterail.return;

    $scope.agreeBorrow = function () {
      $http.get($rootScope.url+'/material/official/agree?borrowMaterialId='+$rootScope.detail_meterail.id).then(function (response) {
        if(response.data.code == 1){
          alert('同意');
          $location.path('/manager');
        }
      });
    };
    $scope.notBorrow = function () {
        alert('未同意');
    };
    $scope.back = function () {
      $http.get($rootScope.url +'/material/official/evaluate?borrowMaterialId='
        +$rootScope.detail_meterail.id+'&&returnStatus="确认归还"').then(function (response) {
        $location.path('/manager');
      });
    }

  });
