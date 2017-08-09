'use strict';

/* Controllers */

angular.module('movieApp.search.controller', []).controller('SearchController', ['$scope','movieAPI','HomeFactory','$timeout','$state',function($scope,movieAPI,HomeFactory,$timeout,$state) {

	$scope.searchName = $state.params.id;
	$scope.searchCatgAry = [];

	var callApi = function(){
		HomeFactory.movieApiFn()
			.then(function(data){
				$scope.allMovieList = data;				
				searchFieldFn(data);
			},function(){
				console.log('data cannot retrieved');
			});
	}
	var allMovieList = callApi();

	function searchFieldFn(data){
		for(var i=0; i<data.length; i++){
			var str = data[i].movie_title.toLowerCase().trim();
			var search = $scope.searchName.toLowerCase().trim();
			console.log(search);
			if(str.search(search) != -1){
				$scope.searchCatgAry.push(data[i]);
			}
		}
		console.log($scope.searchCatgAry);
	}



 }]);