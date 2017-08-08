'use strict';

/* Controllers */

angular.module('movieApp.category.controller', []).controller('CategoryController', ['$scope','movieAPI','HomeFactory','$timeout','$state',function($scope,movieAPI,HomeFactory,$timeout,$state) {

	$scope.catgName = $state.params.id;
	$scope.sameCatgAry = [];

	var callApi = function(){
		HomeFactory.movieApiFn()
			.then(function(data){
				$scope.allMovieList = data;				
				movieCatgListFn(data);
			},function(){
				console.log('data cannot retrieved');
			});
	}
	var allMovieList = callApi();

	function movieCatgListFn(data){
		for(var i=0; i<data.length; i++){
			var str = data[i].genres;
			if(str.search($scope.catgName) != -1){
				$scope.sameCatgAry.push(data[i]);
			}
		}
	}



 }]);