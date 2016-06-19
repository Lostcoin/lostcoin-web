'use strict';

angular.module('lostcoin-web').service('userService', ['$http', 'utilityService', function ($http, utilityService) {

        this.login = function (user) {

            return $http.post('http://localhost:1337/user/login', user).then(function (response) {

                return response;

            }, function (err) {

                utilityService.notify('Login failed.');

                return err;

            });

        };

    }]);