'use strict';

var app = angular.module('stipterApp.controllers.home', []);

	app.controller('HomeCtrl', function ($scope, $http) {
        // ...
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