'use strict';

var app = angular.module('stipterApp.controllers.home', []);

	app.controller('HomeCtrl', function ($scope, $http) {
	});

	app.controller('MenuCtrl', function ($scope, $location) {
		$scope.getClass = function (path) {
			if ($location.path().substr(0, path.length) == path) {
				return "active"
			} else {
				return ""
			}
		}
	});

	app.controller('UnSavedCtrl', function ($scope, $http, $location, LocalPostStorage) {

		$scope.posts = LocalPostStorage.getAll();

		$scope.edit = function (id) {
			$location.path('/post/' + id);
		};

		$scope.delete = function (id) {
			LocalPostStorage.remove(id, function () {
				$scope.posts = LocalPostStorage.getAll();
			});
		};

	})
;