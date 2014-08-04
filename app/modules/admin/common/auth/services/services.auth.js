var services = angular.module('adminApp.services.auth', []);

services.service('Session', function ($window) {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };

    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
    
    this.addSession = function (res) {
        // Session storage
        var session = $window.sessionStorage;
        session.authMyApp = res.data.token;

        // Simple session
        this.create(res.data.id, res.data.user[0].id, res.data.user[0].role);
    };
    
    return this;
});


services.factory('AuthService', function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
        return $http
            .get('http://localhost:3000/login/1')
            .then(function (res) {            
                Session.addSession(res);
                
                return res.user;
            });
    };

    authService.isAuthenticated = function () {
        return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
            authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
});