(function() {
	var app = angular.module('jcrageralternatives', ['ngRoute']);

	app.config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		});	

		$routeProvider.when('/process', {
			templateUrl: 'templates/process.html'
		});

		$routeProvider.when('/about', {
			templateUrl: 'templates/about.html'
		});

		$routeProvider.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'contactController'
		});

		$routeProvider.when('/resources', {
			templateUrl: 'templates/resources.html',
			controller:'resourcesController'
		});

		if(window.history && window.history.pushState){
    		$locationProvider.html5Mode(true);
  		}
	});
})();