'use strict';

var app = angular.module('adminApp.cookies', ['ngCookies']);


app.controller('CookiesCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    
    $scope.cookie = {
        name: 'stroopwafel',
        active: false
    };
    
    $scope.setCookie = function () {
        $cookieStore.put('myCookie', $scope.cookie.name);
        $scope.cookie.active = true;
        
        $scope.cookieName = $cookieStore.get('myCookie');
        
        console.log('cookie added!');
    };
    
    $scope.removeCookie = function () {
        //$scope.cookieName = $cookieStore.get('myCookie');
        $cookieStore.remove('myCookie');
        $scope.cookie.active = false;
        
        $scope.cookieName = 'Please send cookie';
        
        console.log('cookie removed!');
    };
  }]);