'use strict';

angular.module('app',['ui.router'])
.controller('myCtrl',function(){

});
'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtr'
    });
    $urlRouterProvider.otherwise('main'); //如果前边的都匹配不到，则转发大main页面
}])