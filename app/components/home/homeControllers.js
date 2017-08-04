'use strict';

/* Controllers */

angular.module('movieApp.home.controller', []).controller('HomeController', ['$scope','movieAPI','HomeFactory',function($scope,movieAPI,HomeFactory) {

	$scope.home = "home page";
	var callApi = function(){
		HomeFactory.movieApiFn()
			.then(function(data){
				//console.log('data: '+ JSON.stringify(data));
				$scope.allMovieList = data;
				movieCatgFn(data);
			},function(){
				console.log('data cannot retrieved');
			});
	}
	var allMovieList = callApi();


	function movieCatgFn(data){
		//console.log('controller: '+JSON.stringify(data));
		var splitToAry = [];
		for(var i=0; i<data.length; i++){
			splitToAry.push(data[i].genres.split("|"));
		}
			HomeFactory.setGenresFn(splitToAry);
			HomeFactory.setAllMovieFn(data);
	}
	

 }]);