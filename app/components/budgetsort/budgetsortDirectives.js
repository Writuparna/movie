'use strict';

/* Directives */


 angular.module('movieApp.budgetSort.directives', []).directive('budgetSort',[function(){
    return{
  	restrict : 'AEC',
    	replace : true,
    	transclude :  true,
    	controller : 'BudgetsortController',
    	templateUrl : 'app/components/budgetSort/budgetSort.html',
    };
}]);
/* */