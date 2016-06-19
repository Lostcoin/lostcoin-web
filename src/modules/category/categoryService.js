'use strict';

angular.module('lostcoin-web').service('categoryService', ['$http', 'utilityService', function ($http, utilityService) {

        this.getUserCategories = function (userID) {

            return $http.get('http://localhost:1337/user/' + userID + '/categories').then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Fetch failed.');

                return err;

            });

        };

    }]);