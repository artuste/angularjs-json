'use strict';

var app = angular.module('adminApp.controllers.home', []);

	app.controller('HomeCtrl', function ($scope, $translate) {
        this.content = 'Some text';

        $scope.test1 = 'test1';

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };

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