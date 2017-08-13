'use strict';

/* Controllers */

angular.module('movieApp.home.controller', []).controller('HomeController', ['$scope','movieAPI','HomeFactory','$state',function($scope,movieAPI,HomeFactory,$state) {

	$scope.home = "home page";
	$scope.allMovieAry = [];
	//$scope.test = movieAPI;

	var callApi = function(){
		HomeFactory.movieApiFn()
			.then(function(){/**/
				var apidata = localStorage.getItem('apiData');
				apidata = JSON.parse(apidata);
				$scope.allMovieList = apidata;
				movieCatgFn(apidata);
			},function(){
				console.log('data cannot retrieved');
			});/**/
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

	/*$scope.yearSortFn = function(sortParam){
		console.log('abc');
		HomeFactory.movieApiFn()
			.then(function(data){
				$scope.allMovieList = data;
				HomeFactory.setSortYearFn(data,sortParam);
			},function(){
				console.log('data cannot retrieved');
			});
		var paramResult = sortParam;
		$state.go('yearsort/'+sortParam,null,{reload:true});
	}*/

	

 }]);