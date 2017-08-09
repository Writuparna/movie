'use strict';

/* Controllers */


angular.module('movieApp.budgetsort.controller', []).controller('BudgetsortController', ['$scope','HomeFactory','$timeout','$state',function($scope,HomeFactory,$timeout,$state) {

	$scope.priceParam = $state.params.price_id;
	$scope.pageParam = $state.params.page_id;

   $scope.budgetSortFn = function(){
		console.log('abc: '+$scope.priceParam);
		HomeFactory.movieApiFn()
			.then(function(data){
				if($scope.pageParam=='home'){
					if($scope.priceParam=='lowtohigh'&&$scope.priceParam!='hightolow'){
						$scope.budgetMovie = data.sort(function(a, b){return a.title_year - b.title_year});
					}
					else if($scope.priceParam=='hightolow'&&$scope.priceParam!='lowtohigh'){
						$scope.budgetMovie = data.sort(function(a, b){return b.title_year - a.title_year});
					}
				}else if($scope.pageParam!='home'){
					movieCatgListFn(data);
					$scope.sameCatgAry = [];
					function movieCatgListFn(data){
						for(var i=0; i<data.length; i++){
							var str = data[i].genres;
							if(str.search($scope.catgName) != -1){
								$scope.sameCatgAry.push(data[i]);
							}
						}						
						if($scope.priceParam=='lowtohigh'&&$scope.priceParam!='hightolow'){
							$scope.budgetMovie = $scope.sameCatgAry.sort(function(a, b){return a.title_year - b.title_year});
						}
						else if($scope.priceParam=='hightolow'&&$scope.priceParam!='lowtohigh'){
							$scope.budgetMovie = $scope.sameCatgAry.sort(function(a, b){return b.title_year - a.title_year});
						}
					}
				}
			},function(){
				console.log('data cannot retrieved');
			});
	} 
 	$scope.budgetSortFn();


 }]);

