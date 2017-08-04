'use strict';

/* Controllers */

angular.module('movieApp.home.controller', []).controller('HomeController', ['$scope','movieAPI','HomeFactory',function($scope,movieAPI,HomeFactory) {

	/*$scope.movieList = movieAPI.data;*/
	$scope.home = "home page";

	var callApi = function(){
		HomeFactory.movieApiFn()
			.then(function(data){
				//console.log('data: '+ JSON.stringify(data));
				$scope.allMovieList = data;
			},function(){
				console.log('data cannot retrieved');
			});
	}
	callApi();

 }]);