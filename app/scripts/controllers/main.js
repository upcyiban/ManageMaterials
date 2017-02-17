'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the manageMaterialsApp
 */

angular.module('manageMaterialsApp')
  .controller('MainCtrl', function ($scope, $http,$rootScope,$location) {
    // $http.post('/').then(function (data) {
    //   $scope.meterials = data;
    // });
    $scope.col = 'name';//默认按name列排序
    $scope.desc = 0;//默认排序条件升序
    $scope.orderButton = function (attr) {
      $rootScope.orderId = attr.meterial.id;
      $rootScope.orderName = attr.meterial.name;
      $rootScope.orderOrganization = attr.meterial.organization;
      $rootScope.orderDescription = attr.meterial.description;
      $location.path('/order');
    };
    $scope.meterials = [
      {
        id:1,
        name : '桌子',
        organization: 'yb1',
        description:'haha',
        number:'5'
      },{
        id:2,
        name : 'xiong',
        organization: 'yb2',
        description:'ha',
        number:'3'
      },{
        id:3,
        name : 'xiong',
        organization: 'yb3',
        description:'ha',
        number:'3'
      },{
        id:4,
        name : 'xiong',
        organization: 'yb4',
        description:'ha',
        number:'3'
      },{
        id:5,
        name : 'xiong',
        organization: 'yb5',
        description:'ha',
        number:'3'
      }
    ];
    $rootScope.meterials = $scope.meterials;
  });

