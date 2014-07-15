'use strict';

var app = angular.module('adminApp.controllers.auth', ['adminApp.services.auth']);

app.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});


app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
});


app.controller('ApplicationController', function ($scope, $window, USER_ROLES, AuthService) {
    $scope.currentUser = {
        name: 'User'
    };
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
    $scope.isAuthorizedSession = $window.sessionStorage.authMyApp ? true : false;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
        $scope.isAuthorizedSession = true;
    };
});


app.controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        username: '',
        password: ''
    };
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
//            console.log('good');
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
//            console.log('bad');
        });
    };
});