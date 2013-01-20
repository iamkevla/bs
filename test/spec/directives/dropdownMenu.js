'use strict';

describe('Directive: bs-dropdownMenu', function() {
  beforeEach(module('bsApp'));

  var element, scope;

  it('should make hidden element visible', inject(function($rootScope, $compile) {

  	scope = $rootScope;

  	scope.$apply(function(){
  		scope.menuItems = [
			{ menuItem: "Action", href:"#" },
			{ menuItem: "Another action", href:"#" },
			{ menuItem: "Something else her", href:"#" },
			{ type: "divider"},
			{ menuItem: "Separated link", href:"#" },
			{ menuItem: "Something else again", href:"#" }
		];

  	});

    element = angular.element('<bs-dropdown-menu menu-items="menuItems" trigger="Trigger" ></bs-dropdown-menu>');
    element = $compile(element)($rootScope);
    $rootScope.$digest();
    //dump(element);
    //expect(element.toString()).toBe('[[object HTMLElement]]');
    expect(element.find('li').length).toBe(6);
  }));
});
