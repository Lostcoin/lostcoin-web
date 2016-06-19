'use strict';

angular.module('lostcoin-web').service('categoryService', ['$http', 'utilityService', function ($http, utilityService) {

        this.getCategories = function (userID) {

            return $http.get('http://localhost:1337/user/' + userID + '/categories').then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Fetch failed.');

                return err;

            });

        };

        this.deleteCategory = function (categoryID) {

            return $http.delete('http://localhost:1337/category/' + categoryID).then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Delete failed.');

                return err;

            });

        };

    }]);