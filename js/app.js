angular.module('BlogApp', ['ngRoute', 'ngAnimate'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html'
			})
			.when('/work/lsl', {
				templateUrl: 'partials/lsl.html'
			})
			.when('/work/sfp', {
				templateUrl: 'partials/sfp.html'
			})
			.when('/work/columbiasqrmedical', {
				templateUrl: 'partials/columbiasqrmedical.html'
			})
			.when('/work/concepts', {
				templateUrl: 'partials/concepts.html'
			})
			.when('/', {
				controller: 'BlogCtrl',
				templateUrl: 'blog/blog.html'
			})
			.when('/blog/:post', {
				controller: 'PostCtrl',
				templateUrl: 'blog/post.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.controller('BlogCtrl',
		function($rootScope, $scope, $http, $window) {
			$http.get('blog/blog.json')
				.success(function(data) {
					$rootScope.blog = data;
				});
		})
	.controller('PostCtrl',
		function($scope, $rootScope, $routeParams, $http, $sce) {
			$http.get('blog/blog.json')
				.success(function(data) {
					if (data[$routeParams.post]) {
						$scope.Post = data[$routeParams.post];
						$scope.Post.body = $sce.trustAsHtml($scope.Post.body);
					} else {
						$scope.Post = {
							title: "404",
							date: "Whoops, sorry about that."
						};
					}
				})
				.error(function() {
					$scope.Post = {
						title: "Something's Wierd",
						date: "Hmm, seems like there's no internet connection..?"
					};
				});
		})