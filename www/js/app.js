define([
    'angular',
    'uiRouter',
    'uiBootstrap',

    './controllers/index'
], function (ng) {
    'use strict';

    return ng
        .module('app', ['app.controllers', 'ui.bootstrap', 'ui.router'])

        .value('config', {
            apiUrl: '/api'
        });
});
