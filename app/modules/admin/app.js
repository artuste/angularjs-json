'use strict';

var adminApp = angular.module('adminApp', [
        // Home
        'adminApp.controllers.home',

        // Products
        'adminApp.controllers.product',
        'adminApp.directive.product',
        'adminApp.factoryProduct',

        // Filters
        'adminApp.controllers.filters',
        'adminApp.filters',

        // Cookies
        'adminApp.cookies',

        // REST
        'adminApp.services.rest',
        'adminApp.controllers.rest',

        // Authentication
        'adminApp.controllers.auth',
        'adminApp.services.auth',

        // Translation
        'adminApp.services.translate',
        'adminApp.controllers.translations',

        'ngRoute',
        'ngResource',
        'pascalprecht.translate'
    ]),
    adminAppPath = 'app/modules/admin';


adminApp.config(function ($routeProvider) {
    $routeProvider
        .when('/start', {
            templateUrl: adminAppPath + '/home/tpl/home.tpl.html',
            controller: 'HomeCtrl'
        })
        .when('/categories', {
            templateUrl: adminAppPath + '/products/categories/tpl/categories.tpl.html',
            controller: 'ctrlRead'
        })
        .when('/categories/new', {
            templateUrl: adminAppPath + '/products/categories/tpl/new.tpl.html',
            controller: 'NewCategoryCtrl'
        })
        .when('/categories/edit', {
            templateUrl: adminAppPath + '/products/categories/tpl/edit.tpl.html',
            controller: 'EditCategoryCtrl'
        })
        .when('/filters', {
            templateUrl: adminAppPath + '/common/filters/tpl/filters.tpl.html',
            controller: 'FiltersCtrl'
        })
        .when('/rest', {
            templateUrl: adminAppPath + '/common/rest/tpl/rest.tpl.html',
            controller: 'PostAllDataCtrl'
        })
        .when('/auth', {
            templateUrl: adminAppPath + '/common/auth/tpl/auth.tpl.html'
        })
        .when('/translations', {
            templateUrl: adminAppPath + '/common/translate/tpl/translations.tpl.html',
            controller: 'TranslationsCtrl'
        })
        .when('/cookies', {
            templateUrl: adminAppPath + '/common/cookies/tpl/cookies.tpl.html',
            controller: 'CookiesCtrl'
        })
        .otherwise({
            redirectTo: '/start'
        });
});