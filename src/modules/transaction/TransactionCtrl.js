'use strict';

angular.module('lostcoin-web').controller('TransactionCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.transaction

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.transaction = {
                amount: 0,
                category: 0,
                date: new Date(),
                user: null
            };

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);