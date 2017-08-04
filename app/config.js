'use strict';


// Declare app level module which depends on filters, and services
angular.module('movieApp').config(['$urlRouterProvider','$stateProvider', '$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider){
		$stateProvider.state('home',{
			url : '/home',
			templateUrl : 'app/components/home/home.html',
			controller : 'HomeController',
		}).state('header',{
			template : '<main-header></main-header>',			
		}).state('category',{
			url : '/category',
			templateUrl : 'app/components/category/category.html',	
			controller : 'CategoryController',	
		});
		$urlRouterProvider.otherwise('home');
}]);