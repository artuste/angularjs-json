'use strict';

var app = angular.module('adminApp.controllers.filters', ['adminApp.filters']);

app.controller('FiltersCtrl', function ($scope) {
    $scope.values = [new Date(-1), new Date()];
});