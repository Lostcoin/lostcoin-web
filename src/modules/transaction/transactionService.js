'use strict';

angular.module('lostcoin-web').service('transactionService', ['$http', 'utilityService', function ($http, utilityService) {

        this.save = function (transaction) {

            return $http.post('http://localhost:1337/transaction', transaction).then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Failed.');

                return err;

            });

        };

    }]);