(function () {
    'use strict';

    angular.module('G', ['ui.bootstrap', 'ui.router'])

        .value('config', {
            apiUrl: '/api'
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "partials/home.html",
                    controller: 'HomeController'
                });
        })

        .controller('HomeController', function ($scope, $http, $log, config) {
            $scope.hello = function () {
                $http.get(config.apiUrl + '/').success(function (data) {
                    $log.log(data);
                });
            };
        })
    ;
}());