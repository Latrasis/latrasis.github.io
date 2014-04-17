var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/home.html'})
			.when('/work/lsl', {templateUrl: 'partials/lsl.html'})
			.when('/work/sfp', {templateUrl: 'partials/sfp.html'})
			.when('/work/concepts', {templateUrl: 'partials/concepts.html'})
			.otherwise({redirectTo: '/'});

		// Use HTML5 History API
		$locationProvider.html5Mode(true);

}]);

