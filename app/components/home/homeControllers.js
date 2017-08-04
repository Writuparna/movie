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
				movieCatgFn(data);
			},function(){
				console.log('data cannot retrieved');
			});
	}
	var allMovieList = callApi();

	//console.log('controller: '+allMovieList);
	//HomeFactory.set;

	function movieCatgFn(data){
		//console.log('controller: '+JSON.stringify(data));
		for(var i=0; i<data.length; i++){
			//console.log('genres: '+data[i].genres);
			var splitToAry = data[i].genres.split("|");
			//console.log('genres cntrl: '+splitToAry);
			HomeFactory.setGenresFn(splitToAry);
		}
			HomeFactory.setAllMovieFn(data);
	}

 }]);