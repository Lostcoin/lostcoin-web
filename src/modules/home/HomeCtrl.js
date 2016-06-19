'use strict';

angular.module('lostcoin-web').controller('HomeCtrl', ['$rootScope', '$scope', 'userService', 'utilityService', function ($rootScope, $scope, userService, utilityService) {

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

                if (!response) {

                    utilityService.notify('Login failed.');

                } else {

                    $rootScope.user = response.data;
                    
                    sessionStorage.user = JSON.stringify($rootScope.user);

                    $rootScope.changeState('report.individual');

                }

            });

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $scope.initialize();

        } else {

            $rootScope.changeState('report.individual');

        }

    }]);