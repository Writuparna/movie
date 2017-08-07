'use strict';

/* Controllers */


angular.module('movieApp.yearsort.controller', []).controller('YearsortController', ['$scope','HomeFactory','$timeout',function($scope,HomeFactory,$timeout) {

	$scope.yearlyMovie = HomeFactory.getSortYearFn();

    	
 }]);