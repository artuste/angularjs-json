var app = angular.module('stipterApp.controllers.splitter', []);

	app.controller('SplitterCtrl', function ($scope, $http) {

		$http({method: 'GET', url: 'app/mockdata/splitter/splitter.json'}).
			success(function (data, status, headers, config) {
				$scope.list = data;
			});

		$scope.details = function (id) {
			$http({method: 'GET', url: 'app/mockdata/splitter/splitter_'+id+'.json'}).
				success(function (data, status, headers, config) {
					$scope.config = data.config;
					$scope.oneitem = data.data;
				});
		}
	});