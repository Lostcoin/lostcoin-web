'use strict';

angular.module('lostcoin-web').controller('HomeCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

        };

        /* --- RUN --- */
        
        $rootScope.pageTitle = 'Lostcoin - Home';

        $scope.initialize();

    }]);