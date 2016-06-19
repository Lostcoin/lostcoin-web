'use strict';

angular.module('lostcoin-web').controller('TransactionFormCtrl', ['$rootScope', '$scope', 'categoryService', 'transactionService', 'utilityService', function ($rootScope, $scope, categoryService, transactionService, utilityService) {

        /* --- MODELS --- */

        // $scope.categories
        // $scope.transaction

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.categories = [{
                    id: 0,
                    name: 'Uncategorised'
                }];

            $scope.getCategories();

            $scope.transaction = {
                id: 0,
                amount: 0,
                category: 0,
                date: new Date(),
                user: null
            };

        };

        $scope.getCategories = function () {

            categoryService.getCategories($rootScope.user.id).then(function (response) {

                $scope.categories = $scope.categories.concat(response.data);

            });

        };

        $scope.saveTransaction = function (type) {

            var transaction = $scope.transaction;

            transaction.amount *= type;

            transaction.user = $rootScope.user.id;

            if (transaction.category === 0) {

                delete transaction.category;

            }

            if (transaction.id === 0) {

                delete transaction.id;

            }

            transactionService.save(transaction).then(function (response) {

                utilityService.notify('Transaction saved!');

                $rootScope.changeState('transaction.browse');

            });

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);