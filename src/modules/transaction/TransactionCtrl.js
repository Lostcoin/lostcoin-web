'use strict';

angular.module('lostcoin-web').controller('TransactionCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.transaction

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.transaction = {
                amount: null,
                category: null
            };

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);