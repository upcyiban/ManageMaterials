'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:ManagerCtrl
 * @description
 * # ManagerCtrl
 * Controller of the manageMaterialsApp
 */
angular.module('manageMaterialsApp')
  .controller('ManagerCtrl', function ($scope,$location,$rootScope,$http) {
    $http.get($rootScope.url+ '/material/isadmin').then(function (response) {
      if (response.data == -1) {
        alert("not admin");
        $location.path('/');
      }
    });
    $http.post($rootScope.url+'/material').then(function (response) {
      $scope.meterials = response.data;
    });
    $scope.col = 'name';//默认按name列排序
    $scope.desc = 1;//默认排序  降序

    //删除
    $scope.delete = function (attr) {
      $http.get($rootScope.url+'/material/official/delete?materialId='+attr.meterial.id).then(function (response) {
        if(response.data.code == 1){
          alert("删除成功");
          $location.path('/');
        }else{
          alert('删除失败');
        }
      })
    };
    $scope.showForm = false;
    $scope.newSubmit = function () {
      //提交数据
      $http.get($rootScope.url+'/material/official/creat?name='+$scope.newName
        +'&organization='+$scope.newOrganization+'&description='+$scope.newDescription
        +'&totalnumber='+$scope.newTotalNumber).then(function (response) {
        if(response.data.code ==1){
          alert("创建成功");
          $location.path('/');
        }else{
          alert('未知错误');
        }
      })
    };

    //借用记录
    $http.get($rootScope.url+'/material/official').then(function (response) {
      console.log(response.data);
      $scope.borrowMaterialmeterials = response.data;
      $rootScope.borrowMaterialmeterials = response.data;
      for(var i = 0;i<response.data.length;i++){
        $scope.borrowMaterialmeterials[i].startTime = timetrans(response.data[i].startTime);
        $scope.borrowMaterialmeterials[i].endTime = timetrans(response.data[i].endTime);
        if(response.data[i].isAgree== 0){
          $scope.borrowMaterialmeterials[i].status = '申请中';
        }else if(response.data[i].isAgree==-1){
          $scope.borrowMaterialmeterials[i].status = '申请失败';
        }else {
          $scope.borrowMaterialmeterials[i].status = '借出中';
        }
        if(response.data[i].return){
          $scope.borrowMaterialmeterials[i].status = '已归还';
        }
      }
    });
    $scope.col2 = 'endTime';//默认按endTime列排序
    $scope.desc2 = 1;//默认排序条 降序
    $scope.detail = function (attr) {
      $rootScope.detail_meterail = attr.borrowMaterialmeterial;
      $location.path('/detail');
    };


  });
