'use strict';

/* Controllers */


angular.module('movieApp.header.controller', []).controller('HeaderController', ['$scope','HomeFactory','$timeout',function($scope,HomeFactory,$timeout) {

	$scope.header = "home page";
	$scope.categoryList = [];
	var callApi = function(){
		HomeFactory.movieApiFn()
			.then(function(data){
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
		var fullArray = [];
		var genersAry = [];
		fullArray=splitToAry.join().split(',');
		for(var j=0; j<fullArray.length; j++){
			var count = 0;
			genersAry.push(fullArray[j]);
			for(var k=0; k<genersAry.length; k++){
				if(fullArray[j]==genersAry[k]){
					count+=1;
				}
				if(count>1){
					genersAry.pop();
				}
			}
		}
		console.log(genersAry);
		
	}
	/*function arrayUnique(array) {
	    var a = array.concat();
	    for(var i=0; i<a.length; ++i) {
	        for(var j=i+1; j<a.length; ++j) {
	            if(a[i] === a[j])
	                a.splice(j--, 1);
	        }
	    }
	    return a;
	}
	var ar1 = [];
	var ar2 = ['x','n','a'];
	var ar3 = ['b','c','d'];
	var array3 = arrayUnique(ar1.concat(ar2,ar3));
	console.log('array3: '+ JSON.stringify(array3))*/

    	
 }]);