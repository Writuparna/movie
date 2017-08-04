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
		//console.log('allData: '+JSON.stringify(movieObj.Alldata));
	}
	function getAllMovieFn(){
		return movieObj.AlldataObj;	
	}/**/
	function setGenresFn(allGenres){
		movieObj.allGenresObj = allGenres;
		//console.log('allGenres set: '+movieObj.allGenresObj);	
	}
	
	function getGenresFn(){	
		console.log('allGenres get: '+JSON.stringify(movieObj));
		return movieObj.allGenresObj;	
	}

	return movieObj;


 }]);













