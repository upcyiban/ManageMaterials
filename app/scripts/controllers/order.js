'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the manageMaterialsApp
 */
angular.module('manageMaterialsApp')
  .controller('OrderCtrl', function ($scope, $rootScope, $http, $location) {
    $scope.id = $rootScope.orderId ;
    $scope.name = $rootScope.orderName ;
    $scope.organization = $rootScope.orderOrganization ;
    $scope.description = $rootScope.orderDescription ;
    $scope.number = $rootScope.number;

    //日历  不让用日历
    // $scope.startTime = new Date();
    // $scope.options = {
    //   customClass: getDayClass,
    //   minDate: new Date(),
    //   showWeeks: true
    // };
    //
    // $scope.setDate = function(year, month, day) {
    //   $scope.endTime = new Date(year, month, day);
    // };
    // var tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // var afterTomorrow = new Date(tomorrow);
    // afterTomorrow.setDate(tomorrow.getDate() + 1);
    // $scope.events = [
    //   {
    //     date: tomorrow,
    //     status: 'full'
    //   },
    //   {
    //     date: afterTomorrow,
    //     status: 'partially'
    //   }
    // ];
    // function getDayClass(data) {
    //   var date = data.date,
    //     mode = data.mode;
    //   if (mode === 'day') {
    //     var dayToCheck = new Date(date).setHours(0,0,0,0);
    //
    //     for (var i = 0; i < $scope.events.length; i++) {
    //       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
    //
    //       if (dayToCheck === currentDay) {
    //         return $scope.events[i].status;
    //       }
    //     }
    //   }
    //   return '';
    // }

    $scope.borrowerSubmit = function () {
      if(Date.parse($scope.endTime)<Date.parse($scope.startTime)){
        alert("时间出问题了");
      }else if($scope.borrowNumber>$scope.number){
        alert("可借数目出错");
        alert("余量不足");
      }else {
        var phone = /^1[34578]\d{9}$/;
        if ((!phone.test($scope.borrowerNumber))) {
          alert('手机号格式错误');
        } else {
          //发送数据
          $http.get($rootScope.url + '/material/creat?borrowerName='
            + $scope.borrowerName + '&borrowerNumber=' + $scope.borrowerNumber + '&reason=' + $scope.reason
            + '&materialId=' + $rootScope.orderId + '&borrowNumber=' + $scope.borrowNumber + '&startTime=' + Date.parse($scope.startTime)
            + '&endTime=' + Date.parse($scope.endTime)
          ).then(function (response) {
            if (response.data.code == 1) {
              alert("提交成功，等待审核");
              $location.path('/');
            } else {
              alert("未知错误");
            }
          });

        }
      }
    };
  });
