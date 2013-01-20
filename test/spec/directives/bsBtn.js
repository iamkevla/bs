'use strict';

describe('Directive: bsBtn', function() {
  beforeEach(module('bsApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<bs-btn>1</bs-btn>');
    element = $compile(element)($rootScope);
    $rootScope.$digest();
    dump(element);
  }));
});
