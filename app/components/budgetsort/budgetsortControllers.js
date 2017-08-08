'use strict';

/* Controllers */


angular.module('movieApp.budgetsort.controller', []).controller('BudgetsortController', ['$scope','HomeFactory','$timeout','$state',function($scope,HomeFactory,$timeout,$state) {

	$scope.sortParam = $state.params.id;
		console.log('abc');

   $scope.yearSortFn = function(){
		HomeFactory.movieApiFn()
			.then(function(data){
				if($scope.sortParam=='oldtonew'&&$scope.sortParam!='newtoold'){
					$scope.yearlyMovie = data.sort(function(a, b){return a.title_year - b.title_year});
				}
				else if($scope.sortParam=='newtoold'&&$scope.sortParam!='oldtonew'){
					$scope.yearlyMovie = data.sort(function(a, b){return b.title_year - a.title_year});
				}
			},function(){
				console.log('data cannot retrieved');
			});
	} 
 	$scope.yearSortFn();


 }]);