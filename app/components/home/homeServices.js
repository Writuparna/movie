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
		setSortYearFn : setSortYearFn,
		getSortYearFn : getSortYearFn,
		setSortNewtoOldFn : setSortNewtoOldFn,
		getSortNewtoOldFn : getSortNewtoOldFn
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

	function setSearchItemFn(data){
		movieObj.searchFieldVal = data;
	}

	function getSearchItemFn(){
		return movieObj.searchFieldVal;
	}

	function setSortYearFn(data){
		var allData = data;
		movieObj.yearSortData = allData.sort(function(a, b){return a.title_year - b.title_year});
	}

	function getSortYearFn(){
		return movieObj.yearSortData;		
	}


	function setSortNewtoOldFn(data){
		var allData = data;
		movieObj.yearSortData = allData.sort(function(a, b){return b.title_year - a.title_year});
		localStorage.setItem('oldToNew', movieObj.yearSortData);
		console.log(oldToNew);
	}

	function getSortNewtoOldFn(){
		return movieObj.yearSortData;		
	}


	return movieObj;

 }]);













