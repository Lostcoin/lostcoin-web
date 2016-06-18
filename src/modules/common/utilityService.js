'use strict';

angular.module('lostcoin-web').service('utilityService', ['$mdToast', function ($mdToast) {

        this.notify = function (message) {

            $mdToast.showSimple(message);

        };

    }]);