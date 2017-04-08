/**
 * Created by Administrator on 2017/4/8.
 */
/*整个应用的路由*/
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

    $stateProvider.state('app',{
        url:'/app', //一个锚点 下面有多个模板。多视图
        views:{
            home:{
                templateUrl:'../view/home_tpl.html',
                controller:'homeController'
            },
            author:{
                template:'<h1>作者</h1>'
            },
            column:{
                template:'<h1>栏目</h1>'
            },
            my:{
                template:'<h1>我的</h1>'
            },
        }
    });
    $urlRouterProvider.otherwise('/app');

}]);

angular.module('app').config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('app.home',{
        url:'/home', //一个锚点 下面有多个模板。多视图
        template:'<homelist></homelist>'
    });

}]);

angular.module('app').config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('app.detail',{
        url:'/detail', //一个锚点 下面有多个模板。多视图
        template:'detail'
    });

}]);