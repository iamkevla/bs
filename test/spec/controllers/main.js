'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('bsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.model.awesomeThings.length).toBe(3);
  });
});
