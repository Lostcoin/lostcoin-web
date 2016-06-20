'use strict';

angular.module('lostcoin-web').service('reportService', ['$http', 'utilityService', function ($http, utilityService) {

        this.getCategoryDistribution = function (userID) {

            return $http.get('http://localhost:1337/statistics?userID=' + userID).then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Fetch failed.');

                return err;

            });

        };

    }]);