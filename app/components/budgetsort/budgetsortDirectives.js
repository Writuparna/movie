'use strict';

/* Directives */


 angular.module('movieApp.budgetsort.directives', []).directive('budgetSort',[function(){
    return{
  		restrict : 'E',
    	replace : true,
    	transclude :  true,
    	controller : 'BudgetsortController',
    	templateUrl : 'app/components/budgetSort/budgetSort.html',
    	/*require : "yearSort",
    	link : function(scope,element, attrs, demoCtrl){
    		demoCtrl.sayHello();
    	}*/
    };
}]);
/* */