'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the manageMaterialsApp
 */
angular.module('manageMaterialsApp')
  .controller('UserCtrl', function ($scope, $http, $rootScope) {
    $http.get($rootScope.url+'/material/borrower').then(function (response) {
      $scope.meterials = response.data;
      for(var i = 0;i<response.data.length;i++){
        $scope.meterials[i].startTime = timetrans(response.data[i].startTime);
        $scope.meterials[i].endTime = timetrans(response.data[i].endTime);
        if(response.data[i].isAgree== 0){
          $scope.meterials[i].status = '申请中';
        }else if(response.data[i].isAgree== -1){
          $scope.meterials[i].status = '申请失败';
        }else {
          $scope.meterials[i].status = '借出中';
        }
        if(response.data[i].return){
          $scope.meterials[i].status = '已归还';
        }
      }
    });
  });
