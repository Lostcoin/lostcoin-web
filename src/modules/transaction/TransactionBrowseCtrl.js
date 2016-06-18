'use strict';

angular.module('lostcoin-web').controller('TransactionBrowseCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.transaction
        // $scope.transactions

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.transactions = [];

            $scope.getTransactions();

        };

        $scope.editTransaction = function (transaction) {

            $scope.transaction = transaction;

            $rootScope.changeState('transaction.form');

        };

        $scope.getTransactions = function () {

            $rootScope.nascent = true;

            $scope.transactions = [];

            $rootScope.nascent = false;

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);