(function() {
	var app = angular.module('jcrageralternatives');
	app.controller('contactController', ['$scope', '$http', function($scope, $http) {

    $scope.httpCallText = "Send";
    $scope.httpCall = {
          'background-color': '#8B0000'
    };

		$scope.contactData = {};

		$scope.processForm = function() {

      $scope.submitted = true;

      $('.submit-btn').removeClass('form-btn').prop("disabled", true);

      $scope.httpCallText = "Sending...";
      $scope.httpCall = {
        'background-color' : '#663300'
      };

  			$http({
  				method  : 'POST',
  				url     : '/php/contact.php',
  				data    : $.param($scope.contactData),  // pass in data as strings
  				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 			}).then(function (response) {
          if(response.data["success"] === false) {
            $scope.submitted = false;
            $scope.httpCallText = "Error. Please Try Again.";
            $scope.httpCall = {
              'background-color' : 'red'
            };

            $('.submit-btn').prop("disabled", false);

          }
          else {
            $scope.httpCallText = "Sent! Thank You for Your Message"
            $scope.httpCall = {
              'background-color' : 'green'
            }
        };

  			}, function errorCallback(response) {
          $scope.httpCallText = "Error. Please Try Again.";
  			  $scope.httpCall = {
            'background-color' : 'red'
          };
            
          $('.submit-btn').prop("disabled", false);
  			
        });
 		}
	}]);
})();