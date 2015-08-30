(function() {
	var app = angular.module('jcrageralternatives', ['ngRoute']);

	app.config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/test', {
			templateUrl: 'templates/test.html',
			controller:'testController'
		});

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		});	

		if(window.history && window.history.pushState){
    		$locationProvider.html5Mode(true);
  		}
	});

	app.controller('IndexController', function($scope) {
		$scope.menu = menu;

	});


	var test = "Testing Routing";
	var menu = "Starting Test";

})();