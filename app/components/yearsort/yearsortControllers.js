'use strict';

/* Controllers */


angular.module('movieApp.yearsort.controller', []).controller('YearsortController', ['$scope','HomeFactory','$timeout','$state',function($scope,HomeFactory,$timeout,$state) {

	$scope.sortParam = $state.params.time_id;
	$scope.sortParamPage = $state.params.page_id;
	$scope.catgName = $state.params.page_id;

   $scope.yearSortFn = function(){
		/*HomeFactory.movieApiFn()
			.then(function(data){*/
				var apidata = localStorage.getItem('apiData');
				apidata = JSON.parse(apidata);
   				if($scope.sortParamPage=='home'){
					if($scope.sortParam=='oldtonew'&&$scope.sortParam!='newtoold'){
						$scope.yearlyMovie = apidata.sort(function(a, b){return a.title_year - b.title_year});
					}
					else if($scope.sortParam=='newtoold'&&$scope.sortParam!='oldtonew'){
						$scope.yearlyMovie = apidata.sort(function(a, b){return b.title_year - a.title_year});
					}
				}else if($scope.sortParamPage!='home'){
					movieCatgListFn(apidata);
					function movieCatgListFn(apidata){
						$scope.sameCatgAry = [];
						for(var i=0; i<apidata.length; i++){
							var str = apidata[i].genres;
							if(str.search($scope.catgName) != -1){
								$scope.sameCatgAry.push(apidata[i]);
							}
						}
						//console.log('$scope.sameCatgAry: '+ JSON.stringify($scope.sameCatgAry));
						if($scope.sortParam=='oldtonew'&&$scope.sortParam!='newtoold'){
							$scope.yearlyMovie = $scope.sameCatgAry.sort(function(a, b){return a.title_year - b.title_year});
						}
						else if($scope.sortParam=='newtoold'&&$scope.sortParam!='oldtonew'){
							$scope.yearlyMovie = $scope.sameCatgAry.sort(function(a, b){return b.title_year - a.title_year});
						}
					}
				}
			/*},function(){
				console.log('data cannot retrieved');
			});*/
	
	} 
 	$scope.yearSortFn();


 }]);