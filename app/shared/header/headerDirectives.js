'use strict';

/* Directives */


angular.module('movieApp.header.directives', []).directive('mainHeader',[function(){
    return{
    	restrict : 'AEC',
    	replace : true,
    	templateUrl : 'app/shared/header/header.html'
    };
}]);
