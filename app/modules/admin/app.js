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

    'ngRoute',
    'ngResource'
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
        controller: 'CategoryCtrl'
    })
    .when('/filters', {
        templateUrl: adminAppPath + '/common/filters/tpl/filters.tpl.html',
        controller: 'FiltersCtrl'
    })
    .when('/rest', {
        templateUrl: adminAppPath + '/common/rest/tpl/rest.tpl.html',
        controller: 'PostAllDataCtrl'
    })
    .otherwise({
        redirectTo: '/start'
    });
});