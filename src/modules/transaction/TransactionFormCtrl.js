'use strict';

angular.module('lostcoin-web').controller('TransactionFormCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */
        
        // $scope.transaction

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {};

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);