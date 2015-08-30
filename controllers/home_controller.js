(function() {
	var app = angular.module('jcrageralternatives');
	app.controller('homeController', ['$scope', '$http', function($scope) {
		$scope.test = "Separating Controllers, Home Page";
	}]);
})();