'use strict';

bsApp.directive('bsBtn', function() {
  return {
  	replace: true,
  	transclude: true,
    template: '<button type="button" class="btn" ng-transclude ></button>',
    restrict: 'E'
  };
});

bsApp.directive('bsBtnGroup', function() {
  return {
  	replace: true,
  	transclude: true,
    template: '<div type class="btn-group" ng-transclude ></div>',
    restrict: 'E'
  };
});

bsApp.directive('bsBtnToolbar', function() {
  return {
  	replace: true,
  	transclude: true,
    template: '<div class="btn-toolbar" ng-transclude ></div>',
    restrict: 'E'
  };
});

bsApp.directive('btnGroupVertical', function() {
  return {
    requires: 'bsBtnGroup',
    link: function(scope, element, attrs){
      element.addClass('btn-group-vertical');
    }
  };
});
