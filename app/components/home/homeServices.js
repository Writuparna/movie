'use strict';

/* Controllers */

angular.module('movieApp.home.services', []).factory('HomeFactory', ['movieAPI','$q','$http',function(movieAPI,$q,$http){

	var movieObj = {
		movieApiFn : movieApiFn,
		setGenresFn : setGenresFn,
		setAllMovieFn : setAllMovieFn,
		getGenresFn : getGenresFn,
		getAllMovieFn : getAllMovieFn
	};

	function movieApiFn(){
		var defer = $q.defer();
		$http({
			//url : 'http://starlord.hackerearth.com/movieslisting',
			url: 'data/data.json',
			method : 'GET',
		}).success(function(data){
			defer.resolve(data);
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function setAllMovieFn(allData){
		movieObj.AlldataObj = allData;
	}
	function getAllMovieFn(){
		return movieObj.AlldataObj;	
	}
	function setGenresFn(allGenres){
		movieObj.allGenresObj = allGenres;
		//console.log('allGenres set: '+JSON.stringify(allGenres));	
	}
	function getGenresFn(){	
		//console.dir('allGenres get: '+JSON.stringify(movieObj.allGenresObj));	
		return movieObj.allGenresObj;	
	}

	return movieObj;




 }]);













