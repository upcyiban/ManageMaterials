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
    $http.post($rootScope.url+'/material').then(function (response) {
      $scope.meterials = response.data;
      console.log(response);
    });
    $scope.col = 'name';//默认按name列排序
    $scope.desc = 1;//默认排序  降序

    //删除
    $scope.delete = function (attr) {
      console.log(attr.meterial.id);
      $http.get($rootScope.url+'/material/delete?materialId='+attr.meterial.id).then(function (response) {
        console.log(response);
      })
    };
    $scope.showForm = false;
    $scope.newSubmit = function () {
      //提交数据
      alert('newSubmit');
    };




    //借用记录
    $scope.col2 = 'endTime';//默认按endTime列排序
    $scope.desc2 = 1;//默认排序条 降序
    $scope.borrowMaterialmeterials = [
      {
        id:1,
        name : '桌子',
        organization: 'yb1',
        description:'haha',
        endTime:1
      },{
        id:2,
        name : 'xiong',
        organization: 'yb2',
        description:'ha',
        number:'3',
        endTime:2
      },{
        id:3,
        name : 'xiong',
        organization: 'yb3',
        description:'ha',
        number:'3',
        endTime:3
      },{
        id:4,
        name : 'xiong',
        organization: 'yb4',
        description:'ha',
        number:'3',
        endTime:4
      },{
        id:5,
        name : 'xiong',
        organization: 'yb5',
        description:'ha',
        number:'3',
        endTime:5
      },{
        id:6,
        name : 'xiong',
        organization: 'yb6',
        description:'ha',
        number:'3',
        endTime:6
      }
    ];
    $scope.detail = function (attr) {
      //console.log(attr.borrowMaterialmeterial.id);
      $rootScope.detail_meterail = attr.borrowMaterialmeterial;
      $location.path('/detail');
    };

//     //分页
//     $scope.pageSize = 5;
//     $scope.pages = Math.ceil($scope.borrowMaterialmeterials.length / $scope.pageSize); //分页数
//     $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
//     $scope.pageList = [];
//     $scope.selPage = 1;
// //设置表格数据源(分页)
//     $scope.setData = function () {
//       $scope.items = $scope.borrowMaterialmeterials.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
//     }
//     $scope.items = $scope.borrowMaterialmeterials.slice(0, $scope.pageSize);
// //分页要repeat的数组
//     for (var i = 0; i < $scope.newPages; i++) {
//       $scope.pageList.push(i + 1);
//     }
// //打印当前选中页索引
//     $scope.selectPage = function (page) {
// //不能小于1大于最大
//       if (page < 1 || page > $scope.pages) return;
// //最多显示分页数5
//       if (page > 2) {
// //因为只显示5个页数，大于2页开始分页转换
//         var newpageList = [];
//         for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
//           newpageList.push(i + 1);
//         }
//         $scope.pageList = newpageList;
//       }
//       $scope.selPage = page;
//       $scope.setData();
//       $scope.isActivePage(page);
//       console.log("选择的页：" + page);
//     };
// //设置当前选中页样式
//     $scope.isActivePage = function (page) {
//       return $scope.selPage == page;
//     };
// //上一页
//     $scope.Previous = function () {
//       $scope.selectPage($scope.selPage - 1);
//     };
// //下一页
//     $scope.Next = function () {
//       $scope.selectPage($scope.selPage + 1);
//     };
  });
