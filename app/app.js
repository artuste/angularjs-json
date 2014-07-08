var BACKEND_URL = "http://localhost:8080/app";

var stipterApp = angular.module('stipterApp', [
  'stipterApp.controllers.home',
  'stipterApp.controllers.post',
  'stipterApp.controllers.splitter',
        'stipterApp.controllers.product',
  'stipterApp.factory',
  'stipterApp.service',

  'ngRoute'
 ]);

stipterApp.config(function ($routeProvider) {
    $routeProvider.
    when('/dashboard', {
        templateUrl: 'app/tpl/home.tpl.html',
        controller: 'HomeCtrl'
    }).
    when('/post', {
        templateUrl: 'app/tpl/post/list.tpl.html',
        controller: 'PostListCtrl'
    }).
    when('/post/:id', {
        templateUrl: 'app/tpl/post/form.tpl.html',
        controller: 'PostDetailCtrl'
    }).
    when('/post-new', {
        templateUrl: 'app/tpl/post/form.tpl.html',
        controller: 'PostCreationCtrl'
    }).
    when('/unsaved', {
        templateUrl: 'app/tpl/unsaved.tpl.html',
        controller: 'UnSavedCtrl'
    }).
    when('/splitter', {
        templateUrl: 'app/tpl/splitter.tpl.html',
        controller: 'SplitterCtrl'
    }).
    when('/categories', {
        templateUrl: 'app/tpl/products/categories.tpl.html',
        controller: 'CategoryCtrl'
    }).
    otherwise({
        redirectTo: '/dashboard'
    });
});