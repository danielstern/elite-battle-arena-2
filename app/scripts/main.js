angular.module('EB2',['ui.router','cyo'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    	.state({
            name: "main",
            url: "/",
            templateUrl: 'scripts/templates/main.html',
            controller:function(){
            	console.log("HI")
            }
        })
    	.state({
            name: "town",
            url: "/town",
            templateUrl: 'scripts/templates/town.html',
            controller:function(){
            	
            }
        })


    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
})
.run(function(){
  console.log("runnin");
})
