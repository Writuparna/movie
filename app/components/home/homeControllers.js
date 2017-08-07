'use strict';

/* Controllers */

angular.module('movieApp.home.controller', []).controller('HomeController', ['$scope','movieAPI','HomeFactory','$state',function($scope,movieAPI,HomeFactory,$state) {

	$scope.home = "home page";
	$scope.allMovieAry = [];

	var callApi = function(){
		HomeFactory.movieApiFn()
			.then(function(data){
				//console.log('data: '+ JSON.stringify(data));
				$scope.allMovieList = data;
				//HomeFactory.setSortYearFn(data);
				movieCatgFn(data);
				//sortYear(data);
			},function(){
				console.log('data cannot retrieved');
			});
	}
	var allMovieList = callApi();


	function movieCatgFn(data){
		var splitToAry = [];
		for(var i=0; i<data.length; i++){
			splitToAry.push(data[i].genres.split("|"));
		}
		HomeFactory.setGenresFn(splitToAry);
		HomeFactory.setAllMovieFn(data);
	}

	$scope.yearSortFn = function(){
		console.log('abc');
		HomeFactory.movieApiFn()
			.then(function(data){
				$scope.allMovieList = data;
				HomeFactory.setSortYearFn(data);
				HomeFactory.setSortNewtoOldFn(data);
			},function(){
				console.log('data cannot retrieved');
			});/**/
		$state.go('yearsort',null,{reload:true});
	}

	

 }]);