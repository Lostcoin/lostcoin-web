'use strict';

angular.module('lostcoin-web').service('transactionService', ['$http', 'utilityService', function ($http, utilityService) {

        this.getTransactions = function (userID) {

            return $http.get('http://localhost:1337/transaction?populate=category&user=' + userID).then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Fetch failed.');

                return err;

            });

        };

        this.save = function (transaction) {

            return $http.post('http://localhost:1337/transaction', transaction).then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Failed.');

                return err;

            });

        };

    }]);