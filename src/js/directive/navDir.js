angular.module('app').directive('nav',function () {

    return{
        restrict:'EA',
        templateUrl:'../view/tpl/nav_tpl.html',
        link:function ($scope,ele,attrs) {
            /*分别获取指令上绑定的属性进行逻辑判断
            * <nav isback="true" title= "今日一刻"></nav>
            * */
            if (attrs.isback == 'true'){
                /*隐藏返回*/
                ele.find('i').css({'display':'none'});
            }
            /*设置标题*/
            ele.find('span').html("今日一刻");
            $scope.$on('titlechange',function (e,data) {
                ele.find('span').html(data.navTitle);
            });
        }
    }

});