'use strict';

var app = angular.module('adminApp.controllers.rest', []);

app.controller('PostAllDataCtrl', function ($scope, Post) {
    Post.query(function (data) {
        $scope.posts = data;
    });
});

app.controller('PostShow', function ($scope, Post) {

    $scope.show = function () {

        var idPost = this.idPost;

        Post.get({
            id: idPost
        }, function (data) {
            $scope.post = data;
        });
    };

    $scope.add = function () {
        var d = {
            id: Math.round(Math.random() * 100),
            body: Math.random().toString(36).substring(7)
        };

        Post.save(d, function (data) {
            $scope.posts.push(data);
        });
    };

    $scope.remove = function () {
        var idRemove = this.idRemove;

        var d = {
            id: idRemove
        };

        Post.delete(d, function (data) {
            debugger;
        });
    };
});