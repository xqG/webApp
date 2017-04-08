/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('app').service('xmgHttpTool',['$http',function ($http) {
    /*
    *
    *   args = {
    *       url:'',
    *       method:'get/post/jsonp'
    *       params:{
    *           name:'aa',
    *           age:10
    *       }
    *   }
    *   getData(args,fun,fun)
    *
    * */
    this.getData = function (args,success,error) {

        if (args.method == 'post'){

            var data = "";
            for(var key  in args.params){
                data += key+'='+args.params[key]+'&'
            }
            data = data.slice(0,-1);   //name=aa&age=10

            $http({

                url:args.url,
                method:args.method,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                data:data
            }).then(function (res) {
                success(res.data);
            }).catch(function (err) {
                error(err);
            })

        }else if(args.method == 'get' || args.method == 'jsonp') {

            $http({
                url:args.url,
                method:args.method,
                params:args.params
            }).then(function (res) {
                success(res.data);
            }).catch(function (err) {
                error(err);
            })
        }
    };




}]);