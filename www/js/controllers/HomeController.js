define(['./module', '../bo/sum'], function (controllers, sum) {
    'use strict';

    controllers.controller('HomeController', function ($scope, $http, $log, $modal, config) {
        $scope.hello = function () {

            $modal.open({
                templateUrl: 'partials/myModalContent.html',
                controller: 'ModalController'
            });

            $http.get(config.apiUrl + '/').success(function (data) {
                $log.log(data, sum(2, 2));
            });
        };
    });

    controllers.controller('ModalController', function ($scope, $modalInstance) {
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
});