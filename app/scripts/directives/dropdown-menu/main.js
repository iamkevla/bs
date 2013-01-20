'use strict';

bsApp.directive('bsDropdownMenu', function() {
  return {
  	scope:{
  		menuItems: "=",
      trigger: "@"
  	},
    template: '<div class="dropdown">' +
        				'<a class="dropdown-toggle" data-toggle="dropdown" href="#">{{trigger}}</a>' + 
        	    		'<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">' +
        	    			'<li ng-class="item.type" ng-repeat="item in menuItems">' +    			
        	    				'<a ng-hide="item.type" tabindex="-1" ng-href="item.href">{{item.menuItem}}</a>' + 
        	    			'</li>' +
        	    		'</ul>',
    restrict: 'E',
    replace: true
  };
});
