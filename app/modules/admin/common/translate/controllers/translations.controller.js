'use strict';

var app = angular.module('adminApp.controllers.translations', []);

app.controller('TranslationsCtrl', function ($scope, $translate) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});