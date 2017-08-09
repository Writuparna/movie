'use strict';

/* Directives */


 angular.module('movieApp.budgetsort.directives', []).directive('budgetSort',[function(){
    return{
  	restrict : 'AEC',
    	replace : true,
    	transclude :  true,
    	controller : 'BudgetsortController',
    	templateUrl : 'app/components/budgetSort/budgetSort.html',
    };
}]);
/* */