'use strict';

angular.module('lostcoin-web').controller('ReportIndividualCtrl', ['$rootScope', '$scope', 'reportService', function ($rootScope, $scope, reportService) {

        /* --- MODELS --- */

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.getCategoryDistribution();

        };

        $scope.getCategoryDistribution = function () {

            reportService.getCategoryDistribution($rootScope.user.id).then(function (response) {

                $scope.labels = [];

                $scope.data = [];

                for (var key in response.data) {

                    $scope.labels.push(key);

                    $scope.data.push(Math.abs(response.data[key]));

                }

            });

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);