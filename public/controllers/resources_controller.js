(function() {
	
	function group(arr, size) {
		var newArr = [];
		for(var i = 0; i<arr.length; i+=size) {
			newArr.push(arr.slice(i, (i+size)));
		}

		return newArr;
	}

	var app = angular.module('jcrageralternatives');
	app.controller('resourcesController', ['$scope', '$http', function($scope, $http) {
		$scope.orgs = [
			{
				icon:"/r_images/acs.gif",
				url:"http://www.cancer.org",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/bcnos.jpg",
				url:"http://www.networkofstrength.org/",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/badge1.png",
				url:"http://www.knowcancer.com/prosthetics-wigs-and-accessories/illinois/",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/chicago-sports.gif",
				url:"http://www.chicagoendurancesports.com/",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/cincovidas.jpg",
				url:"http://cincovidas.com/about/",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/gandg.gif",
				url:"http://www.goddessandgrocer.com/",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/imerman-angels.gif",
				url:"http://imermanangels.org/",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/gilda-club.jpg",
				url:"http://fundraising.gildasclubchicago.org/gcc/campaignpage.asp?campaignid=69",
				description:"BLAH BLAH"
			},
			{
				icon:"/r_images/lgfb.gif",
				url:"http://lookgoodfeelbetter.org/",
				description:"BLAH BLAH"
			}
		]

		$scope.groupedOrgs = group($scope.orgs, 3);
	}]);

})();