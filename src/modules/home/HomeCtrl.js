'use strict';

angular.module('lostcoin-web').controller('HomeCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.user

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $rootScope.pageTitle = 'Lostcoin - Home';

            $scope.user = {
                firstName: null,
                lastName: null
            };

        };

        $scope.login = function () {

            $rootScope.user = $scope.user.firstName + ' ' + $scope.user.lastName;

            sessionStorage.user = $rootScope.user;

            $rootScope.changeState('report.individual');

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $scope.initialize();

        } else {

            $rootScope.changeState('report.individual');

        }

    }]);