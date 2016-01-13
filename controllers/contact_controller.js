(function() {
	var app = angular.module('jcrageralternatives');
	app.controller('contactController', ['$scope', '$http', function($scope, $http) {

		$scope.contactData = {};

		$scope.processForm = function() {
  			$http({
  				method  : 'POST',
  				url     : '/php/contact.php',
  				data    : $.param($scope.contactData),  // pass in data as strings
  				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 			}).then(function successCallback(response) {
    			
    			alert('Worked! ' + response.statusText);
    			console.log(response.data);
  			
  			}, function errorCallback(response) {

    			alert('Failed :( ' + response.statusText);
  			
  			});
 		}
	}]);
})();