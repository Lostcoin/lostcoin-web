'use strict';

angular.module('lostcoin-web').controller('HomeCtrl', ['$rootScope', '$scope', 'userService', function ($rootScope, $scope, userService) {

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

            userService.login($scope.user).then(function (response) {

                $rootScope.user = response.data;

                sessionStorage.user = JSON.stringify($rootScope.user);

                $rootScope.changeState('transaction.browse');

            });

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $scope.initialize();

        } else {

            $rootScope.changeState('transaction.browse');

        }

    }]);