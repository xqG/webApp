/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('app').directive('tabbar',function () {

    return{
        restrict:'EA',
        templateUrl:'../view/tpl/tabbar_tpl.html',
        link:function ($scope,ele,attrs) {
            $scope.type = "home";
            $scope.tabClick = function (type) {
                $scope.type = type;
                /*通知外界，tab切换，告诉外界，当前切换是哪一个*/
                $scope.$emit('tabChange',{type:type});
            }
        }
    }

});