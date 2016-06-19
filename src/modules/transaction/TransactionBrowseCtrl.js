'use strict';

angular.module('lostcoin-web').controller('TransactionBrowseCtrl', ['$rootScope', '$scope', 'transactionService', function ($rootScope, $scope, transactionService) {

        /* --- MODELS --- */

        // $scope.transactions

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.transactions = [];

            $scope.getTransactions();

        };

        $scope.getTransactions = function () {

            transactionService.getTransactions($rootScope.user.id).then(function (response) {

                $scope.transactions = response.data;

            });

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);