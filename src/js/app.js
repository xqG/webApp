var app = angular.module('app',['ui.router']);
app.controller('appController',['$scope',function ($scope) {
    $scope.title = "今日一刻";
    $scope.navTitle = "今日一刻";
    $scope.type = 'home';
    $scope.$on('tabChange',function (e,data) {
        $scope.type = data.type;
       switch (data.type){
           case 'home':
               $scope.navTitle = "今日一刻";
               break;
           case 'author':
               $scope.navTitle = "作者";
               break;
           case 'column':
               $scope.navTitle = "栏目";
               break;
           case 'my':
               $scope.navTitle = "我的";
               break;
       }
        /*发送一个广播，让导航指令，更新标题*/
        $scope.$broadcast('titlechange',{navTitle:$scope.navTitle});
    });



}]);