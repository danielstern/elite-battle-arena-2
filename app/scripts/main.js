angular.module('EB2',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
            name: "main",
            url: "/",
            templateUrl: 'scripts/templates/main.html',
            controller:function(){
            	console.log("HI")
            }
        })


    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
})
.run(function(){
  console.log("runnin");
})
