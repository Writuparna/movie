'use strict';

/* Controllers */

angular.module('movieApp.home.services', []).factory('HomeFactory', ['movieAPI','$q','$http',function(movieAPI,$q,$http){

	var movieObj = {
		movieApiFn : movieApiFn,
		setGenresFn : setGenresFn,
		setAllMovieFn : setAllMovieFn,
		getGenresFn : getGenresFn,
		getAllMovieFn : getAllMovieFn,
		setSearchItemFn : setSearchItemFn,
		getSearchItemFn : getSearchItemFn,
		
	};

	function movieApiFn(){
		var defer = $q.defer();
		$http({
			url: 'data/data.json',
			method : 'GET',
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('apiData', JSON.stringify(data));			
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
	}
	function getGenresFn(){	
		return movieObj.allGenresObj;	
	}

	function setSearchItemFn(data){
		movieObj.searchFieldVal = data;
	}

	function getSearchItemFn(){
		return movieObj.searchFieldVal;
	}



	
	return movieObj;

 }]);













