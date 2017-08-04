'use strict';

/* Controllers */


angular.module('movieApp.header.controller', []).controller('HeaderController', ['$scope',function($scope) {

	$scope.header = "home page";
	console.log($scope.header);

 }]);