'use strict';

var app = angular.module('adminApp.services.rest', []);

app.factory('Post', function($resource) {
  return $resource('http://localhost:3000/posts/:id');
});