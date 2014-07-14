'use strict';

var app = angular.module('adminApp.controllers.home', []);

	app.controller('HomeCtrl', function ($scope) {
        this.content = 'Some text';
	});

	app.controller('MenuCtrl', function ($scope, $location) {
		$scope.getPath = function (path) {
			if ($location.path().substr(0, path.length) == path) {
				return "active"
			} else {
				return ""
			}
		}
	});