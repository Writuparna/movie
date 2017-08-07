'use strict';


// Declare app level module which depends on filters, and services
angular.module('movieApp', [
	'ui.router',
	'movieApp.home',
	'movieApp.header',
	'movieApp.category',
	'movieApp.search',
	'movieApp.yearsort'
])
.constant('movieAPI', 'http://starlord.hackerearth.com/movieslisting');