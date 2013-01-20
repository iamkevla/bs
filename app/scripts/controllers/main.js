'use strict';

bsApp.controller('MainCtrl', function($scope) {

	var model = {
		awesomeThings: [
		'Twitter Boostrap',
		'AngularJS',
		'Testacular'
		],
		progressMeter: 30,
		menuItems: [
			{ menuItem: "Action", href:"#" },
			{ menuItem: "Another action", href:"#" },
			{ menuItem: "Something else here", href:"http:www.krackas.com" },
			{ type: "divider"},
			{ menuItem: "Separated link", href:"#" }
		]
	};
  
	$scope.model = model;

});
