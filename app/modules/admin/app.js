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

        'ui.router.state',
        'ui.bootstrap',
//        'ngRoute',
        'ngResource',
        'pascalprecht.translate',
        'ncy-angular-breadcrumb'
    ]),
    adminAppPath = 'app/modules/admin';


adminApp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/start");
    //
    // Now set up the states
    $stateProvider
        .state('start', {
            url: '/start',
            templateUrl: adminAppPath + '/home/tpl/home.tpl.html',
            controller: 'HomeCtrl',
            data: {
                ncyBreadcrumbLabel: 'Home page'
            }
        })
        .state('categories', {
            url: '/categories',
            templateUrl: adminAppPath + '/products/categories/tpl/categories.tpl.html',
            controller: 'ctrlRead',
            data: {
                ncyBreadcrumbLabel: 'Categories'
            }
        })
        .state('categories/new', {
            url: '/categories/new',
            templateUrl: adminAppPath + '/products/categories/tpl/new.tpl.html',
            controller: 'NewCategoryCtrl',
            data: {
                ncyBreadcrumbParent: 'categories',
                ncyBreadcrumbLabel: 'New'
            }
        })
        .state('categories/edit', {
            url: '/categories/edit',
            templateUrl: adminAppPath + '/products/categories/tpl/edit.tpl.html',
            controller: 'EditCategoryCtrl',
            data: {
                ncyBreadcrumbParent: 'categories',
                ncyBreadcrumbLabel: 'Edit'
            }
        })
        .state('filters', {
            url: '/filters',
            templateUrl: adminAppPath + '/common/filters/tpl/filters.tpl.html',
            controller: 'FiltersCtrl',
            data: {
                ncyBreadcrumbLabel: 'Filters'
            }
        })
        .state('rest', {
            url: '/rest',
            templateUrl: adminAppPath + '/common/rest/tpl/rest.tpl.html',
            controller: 'PostAllDataCtrl',
            data: {
                ncyBreadcrumbLabel: 'Rest'
            }
        })
        .state('auth', {
            url: '/auth',
            templateUrl: adminAppPath + '/common/auth/tpl/auth.tpl.html',
            data: {
                ncyBreadcrumbLabel: 'Authorization'
            }
        })
        .state('translations', {
            url: '/translations',
            templateUrl: adminAppPath + '/common/translate/tpl/translations.tpl.html',
            controller: 'TranslationsCtrl',
            data: {
                ncyBreadcrumbLabel: 'Translations'
            }
        })
        .state('cookies', {
            url: '/cookies',
            templateUrl: adminAppPath + '/common/cookies/tpl/cookies.tpl.html',
            controller: 'CookiesCtrl',
            data: {
                ncyBreadcrumbLabel: 'Cookies'
            }
        });
});


// For ngRoute (ng-view)
//adminApp.config(function ($routeProvider) {
//    $routeProvider
//        .when('/start', {
//            templateUrl: adminAppPath + '/home/tpl/home.tpl.html',
//            controller: 'HomeCtrl'
//        })
//        .when('/categories', {
//            templateUrl: adminAppPath + '/products/categories/tpl/categories.tpl.html',
//            controller: 'ctrlRead'
//        })
//        .when('/categories/new', {
//            templateUrl: adminAppPath + '/products/categories/tpl/new.tpl.html',
//            controller: 'NewCategoryCtrl'
//        })
//        .when('/categories/edit', {
//            templateUrl: adminAppPath + '/products/categories/tpl/edit.tpl.html',
//            controller: 'EditCategoryCtrl'
//        })
//        .when('/filters', {
//            templateUrl: adminAppPath + '/common/filters/tpl/filters.tpl.html',
//            controller: 'FiltersCtrl'
//        })
//        .when('/rest', {
//            templateUrl: adminAppPath + '/common/rest/tpl/rest.tpl.html',
//            controller: 'PostAllDataCtrl'
//        })
//        .when('/auth', {
//            templateUrl: adminAppPath + '/common/auth/tpl/auth.tpl.html'
//        })
//        .when('/translations', {
//            templateUrl: adminAppPath + '/common/translate/tpl/translations.tpl.html',
//            controller: 'TranslationsCtrl'
//        })
//        .when('/cookies', {
//            templateUrl: adminAppPath + '/common/cookies/tpl/cookies.tpl.html',
//            controller: 'CookiesCtrl'
//        })
//        .otherwise({
//            redirectTo: '/start'
//        });
//});