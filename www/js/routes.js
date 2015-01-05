define(['./app'], function (app) {
    'use strict';

    return app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/home.html",
                controller: 'HomeController'
            });
    });
});