'use strict';

/* Directives */


 angular.module('movieApp.yearsort.directives', []).directive('yearSort',[function(){
    return{
  	restrict : 'AEC',
    	replace : true,
    	transclude :  true,
    	scope : {
    		 yearSortFn: '&'
    	},
    	controller : 'YearsortController',
    	templateUrl : 'app/components/yearsort/yearsort.html',
    };
}]);
/* */