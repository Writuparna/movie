'use strict';

/* Controllers */


angular.module('movieApp.header.controller', []).controller('HeaderController', ['$scope','HomeFactory',function($scope,HomeFactory) {

	$scope.header = "home page";
	$scope.navMenu = HomeFactory.getGenresFn();
	//console.log($scope.navMenu);

 }]);