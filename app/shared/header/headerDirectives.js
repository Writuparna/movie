'use strict';

/* Directives */


angular.module('movieApp.header.directives', []).directive('mainHeader',[function(){
    return{
    	restrict : 'AEC',
    	replace : true,
    	transclude :  true,
    	controller : 'HeaderController',
    	templateUrl : 'app/shared/header/header.html'
    	//template : '<p>header</p>'
    };
}]);
