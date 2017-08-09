'use strict';

/* Controllers */


angular.module('movieApp.header.controller', []).controller('HeaderController', ['$scope','HomeFactory','$timeout',function($scope,HomeFactory,$timeout) {

	$scope.header = "home page";
	$scope.categoryList = [];

	var callApi = function(){
		/*HomeFactory.movieApiFn()
			.then(function(data){*/
				var apidata = localStorage.getItem('apiData');
				apidata = JSON.parse(apidata);
				$scope.allMovieList = apidata;
				movieCatgFn(apidata);
				searchList(apidata);
				//console.log('apidata: '+ JSON.stringify(apidata));
				//console.log('data: '+ JSON.stringify(data));
			/*},function(){
				console.log('data cannot retrieved');
			});*/
	}
	var allMovieList = callApi();
	function movieCatgFn(data){
		var splitToAry = [];
		for(var i=0; i<data.length; i++){
			splitToAry.push(data[i].genres.split("|"));
		}
		var fullArray = [];
		$scope.genersAry = [];
		fullArray=splitToAry.join().split(',');
		for(var j=0; j<fullArray.length; j++){
			var count = 0;
			$scope.genersAry.push(fullArray[j]);
			for(var k=0; k<$scope.genersAry.length; k++){
				if(fullArray[j]==$scope.genersAry[k]){
					count+=1;
				}
				if(count>1){
					$scope.genersAry.pop();
				}
			}
		}	
	}

	function searchList(data){
		$scope.changeFn = function(userData){
			if(userData!=null || userData!= ""){
				$scope.searchCatgAry = [];
				for(var i=0; i<data.length; i++){
					var str = data[i].movie_title.toLowerCase().trim();
					var search = userData.toLowerCase().trim();
					if(str.search(search) != -1){
						$scope.searchCatgAry.push(data[i].movie_title);
					}
				}
				if(userData==null || userData== ""){
					$scope.searchCatgAry = [];
				}
			}
		}
	}

	$scope.serchAutocatg = function(data){
		console.log(data);
		$scope.searchName = data;
		$scope.searchCatgAry = [];
	}


    	
 }]);