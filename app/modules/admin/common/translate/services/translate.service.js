'use strict';

var app = angular.module('adminApp.services.translate', ['pascalprecht.translate']);

// Static translations
app.config(function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'app/modules/admin/languages/locale-',
            suffix: '.json'
        })
        .preferredLanguage('en');
});

// Simple translations
//app.config(function ($translateProvider) {
//    $translateProvider
//        .translations('en', {
//            HEADLINE: 'Hello there, This is my awesome app!',
//            INTRO_TEXT: 'And it has i18n support!',
//            BUTTON_TEXT_EN: 'english',
//            BUTTON_TEXT_DE: 'german'
//        }).translations('de', {
//            HEADLINE: 'Hey, das ist meine großartige App!',
//            INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!',
//            BUTTON_TEXT_EN: 'englisch',
//            BUTTON_TEXT_DE: 'deutsch'
//        });
//
//    $translateProvider.preferredLanguage('en');
//});