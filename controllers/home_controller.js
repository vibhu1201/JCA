(function() {
	var app = angular.module('jcrageralternatives');
	app.controller('homeController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
		if (typeof twttr === 'undefined') {
            (function() {
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
            })();
        } else {
            $timeout = twttr.widgets.load();
        };
	
		$scope.noDefault = function(event) {
				event.preventDefault();
		};
	}]);
})();