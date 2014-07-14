'use strict';

var app = angular.module('adminApp.filters', []);

app.filter('myfilter', function () {
    return function (input, type) {
//        console.log(type);
//        console.log(input);
        switch (type) {
        case 'uppercase':
            return input.toUpperCase();
        case 'lowercase':
            return input.toLowerCase();
        case 'date':
            return input.toString('dddd, MMMM ,yyyy');
        }
    };
});