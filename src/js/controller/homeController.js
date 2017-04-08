/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('app').controller('homeController',['$scope','$state','xmgHttpTool',function ($scope,$state,xmgHttpTool) {

    $state.go('app.home');
/*    $http({
        url:'http://localhost/api/home.php',
        method:'jsonp'
    }).then(function (res) {
        console.log(res);
    }).catch(function (error) {

    });
    */
    var args = {
      url:'http://localhost/api/home.php',
        method:'jsonp',
        params:null
    };
    xmgHttpTool.getData(args,function (res) {
        $scope.listData = res.posts;
        console.log($scope.listData);
    },function (error) {
        console.log(res);
    });



}]);