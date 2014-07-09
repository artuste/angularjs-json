var stipterApp = angular.module('stipterApp', [
  'stipterApp.controllers.home',
  'stipterApp.controllers.product',
  'stipterApp.directive.product',
  'stipterApp.factoryProduct',

  'ngRoute'
 ]);

stipterApp.config(function ($routeProvider) {
    $routeProvider.
    when('/start', {
        templateUrl: 'app/modules/home/tpl/home.tpl.html',
        controller: 'HomeCtrl'
    }).
    when('/categories', {
        templateUrl: 'app/modules/products/tpl/categories.tpl.html',
        controller: 'CategoryCtrl'
    }).
    otherwise({
        redirectTo: '/start'
    });
});