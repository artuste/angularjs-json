var app = angular.module('stipterApp.controllers.post', [])

	app.controller('PostListCtrl', function ($scope, PostsFactory, PostFactory, $location, LocalPostStorage) {

		$scope.edit = function (id) {
			$location.path('/post/' + id);
		};

		$scope.delete = function (id) {
			PostFactory.delete({ id: id }, function () {
				$scope.posts = PostsFactory.all();
			});
		};

		$scope.create = function () {
			$location.path('/post-new');
		};

		$scope.populate = function () {
			var id = new Date().getTime();
			PostsFactory.create({"id": id, "name": "Lorem " + id});
			$scope.posts = PostsFactory.all();
		};

		// REAL API
//		$scope.posts = PostsFactory.all(function () {
//			LocalPostStorage.tagCached($scope.posts);
//		});

		// MOCK API
		$scope.posts = PostsFactory.all();
		LocalPostStorage.tagCached($scope.posts)
	});

	app.controller('PostDetailCtrl', function ($scope, $routeParams, PostFactory, $location, LocalPostStorage) {

		LocalPostStorage.init($scope);

		$scope.save = function () {
			delete $scope.post.dirty;
			LocalPostStorage.remove($scope.post.id);
			PostFactory.update($scope.post, function () {
				$location.path('/post');
			});
		};

		$scope.cancel = function () {
			LocalPostStorage.remove($scope.post.id, function () {
				$location.path('/post');
			});
		};

		// get data from cache
		$scope.post = LocalPostStorage.get($routeParams.id);

		if ($scope.post == undefined) {
			//get data form REST
			$scope.post = PostFactory.show({id: $routeParams.id});
		}
	});

	app.controller('PostCreationCtrl', function ($scope, PostsFactory, $location) {

		$scope.save = function () {
			$scope.post.id = new Date().getTime();
			PostsFactory.create($scope.post, function () {
				$location.path('/post');
			});
		};

		$scope.cancel = function () {
			$location.path('/post');
		};

	});