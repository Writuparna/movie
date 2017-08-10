'use strict';

/* Controllers */

angular.module('movieApp.search.controller', []).controller('SearchController', ['$scope','movieAPI','HomeFactory','$timeout','$state','$stateParams',function($scope,movieAPI,HomeFactory,$timeout,$state,$stateParams) {

	/*$scope.searchName = $state.params.param1;*/
	$scope.searchName = $state.params.id;
	$scope.searchCatgAry = [];
	console.log('searchName: '+JSON.stringify($scope.searchName));

	var callApi = function(){
				var apidata = localStorage.getItem('apiData');
				apidata = JSON.parse(apidata);
				$scope.allMovieList = apidata;
				searchFieldFn(apidata);
	}
	var allMovieList = callApi();

	function searchFieldFn(data){
		for(var i=0; i<data.length; i++){
			var str = data[i].movie_title.toLowerCase().trim();
			var search = $scope.searchName.toLowerCase().trim();
			console.log(search);
			if(str.search(search) != -1){
				$scope.searchCatgAry.push(data[i]);
			}
		}
		console.log($scope.searchCatgAry);
		$scope.searchName = "";
		console.log('$scope.searchName: '+$scope.searchName);
	}



 }]);