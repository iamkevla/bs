'use strict';

describe('Directive: bs-progress', function() {
  beforeEach(module('bsApp'));

  // jasmine matcher for expecting an element to have a css class
  // https://github.com/angular/angular.js/blob/master/test/matchers.js
  beforeEach(function() {
    this.addMatchers({
      toHaveClass: function(cls) {
        this.message = function() {
          return "Expected '" + angular.mock.dump(this.actual) + "' to have class '" + cls + "'.";
        };

        return this.actual.hasClass(cls);
      }
    });
  });

  var element, scope;

  it('should make hidden element visible', inject(function($rootScope, $compile) {

  	scope = $rootScope;

  	scope.$apply(function() {
      scope.progressMeter = 10;
    });

    element = angular.element('<bs-progress value="{{progressMeter}}" />');
    element = $compile(element)(scope);
   
    scope.$digest();

    expect(element.toString()).toBe('[[object HTMLDivElement]]');

    expect(element ).toHaveClass('progress');

    expect(element.find('div') ).toHaveClass('bar');

  }));
});
