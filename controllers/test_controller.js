(function() {
	var app = angular.module('jcrageralternatives');
	app.controller('testController', ['$scope', '$http', function($scope, $http) {
		$scope.test = "Testing out separating files";
	}]);

})();