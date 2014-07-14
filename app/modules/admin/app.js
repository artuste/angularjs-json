var adminApp = angular.module('adminApp', [
  'adminApp.controllers.home',
  'adminApp.controllers.product',
  'adminApp.directive.product',
  'adminApp.factoryProduct',

  'ngRoute'
 ]), adminAppPath = 'app/modules/admin';


adminApp.config(function ($routeProvider) {
    $routeProvider.
    when('/start', {
        templateUrl: adminAppPath + '/home/tpl/home.tpl.html',
        controller: 'HomeCtrl'
    }).
    when('/categories', {
        templateUrl: adminAppPath + '/products/categories/tpl/categories.tpl.html',
        controller: 'CategoryCtrl'
    }).
    otherwise({
        redirectTo: '/start'
    });
});