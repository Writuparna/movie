'use strict';

/* Controllers */


angular.module('movieApp.header.controller', []).controller('HeaderController', ['$scope','HomeFactory','$timeout',function($scope,HomeFactory,$timeout) {

	$scope.header = "home page";
	$scope.categoryList = [];
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
		var splitToAry = [];
		for(var i=0; i<data.length; i++){
			splitToAry.push(data[i].genres.split("|"));
		}
		var array3 = arrayUnique($scope.categoryList.concat(abc()));
		console.log('array3: '+ array3);
		function abc(){
			for(var j=0; j<splitToAry.length; j++){
				return splitToAry[j];
			}
		}
		console.log('categoryList: '+ abc())
	}
	function arrayUnique(array) {
	    var a = array.concat();
	    for(var i=0; i<a.length; ++i) {
	        for(var j=i+1; j<a.length; ++j) {
	            if(a[i] === a[j])
	                a.splice(j--, 1);
	        }
	    }
	    return a;
	}
/*	var ar1 = [];
	var ar2 = ['x','n','a'];
	var ar3 = ['b','c','d'];
	var array3 = arrayUnique(ar1.concat(ar2,ar3));
	console.log('array3: '+ JSON.stringify(array3))*/

    	
 }]);