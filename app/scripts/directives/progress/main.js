'use strict';

bsApp.directive('bsProgress', function() {

  return {
  	scope:{
  		value: '@',
  	},  	
    template: '<div class="progress" >' +
  				      '<div class="bar" style="width: {{value}}%;" ></div>' +
				      '</div>',
    restrict: 'E',
    replace: true
  };
});


bsApp.directive('progressStriped', function() {
  return {
    requires: 'bsProgress',
    link: function(scope, element, attrs){
      element.addClass('progress-striped');
    }
  };
});

bsApp.directive('active', function() {
  return {
    requires: 'bsProgress',
    link: function(scope, element, attrs){
      element.addClass('active');
    }
  };
});