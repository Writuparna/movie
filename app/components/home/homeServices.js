'use strict';

/* Controllers */

angular.module('movieApp.home.services', []).factory('HomeFactory', ['movieAPI','$q','$http',function(movieAPI,$q,$http){

	var movieObj = {
		movieApiFn : movieApiFn,
		test : 'test'
	};

	function movieApiFn(){
		var defer = $q.defer();
		$http({
			url : 'http://starlord.hackerearth.com/movieslisting',
			method : 'GET',
			/*headers : {
				'content-type' : 'text/plain'
			},*/
		}).success(function(data){
			//console.log('data: '+ JSON.stringify(data));
			defer.resolve(data);

		}).error(function(){
			defer.reject();
		});

		return defer.promise;
	}
	movieObj.movieApiFn();
	console.log(movieObj.test);

	return movieObj;


 }]);