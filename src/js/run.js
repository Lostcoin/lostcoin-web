'use strict';

angular.module('lostcoin-web').run(['$mdSidenav', '$rootScope', '$state', function ($mdSidenav, $rootScope, $state) {

        /* --- MODELS --- */

        // $rootScope.pageTitle;
        // $rootScope.user;

        /* --- FUNCTIONS --- */

        $rootScope.initialize = function () {

            $rootScope.pageTitle = 'Lostcoin';

            var user = sessionStorage.user;

            $rootScope.user = user ? JSON.parse(user) : null;

        };

        $rootScope.$on('$stateChangeStart', function () {

            $rootScope.pageTitle = 'Lostcoin';

            $rootScope.closeSidenav();

        });

        $rootScope.$on('$stateChangeSuccess', function () {});

        $rootScope.changeState = function (state, params) {

            if (typeof params === 'undefined') {

                $state.go(state);

            } else {

                $state.go(state, params);

            }

        };

        $rootScope.closeSidenav = function () {

            $mdSidenav('sidenav').close();

        };

        $rootScope.openSidenav = function () {

            $mdSidenav('sidenav').open();

        };

        /* --- RUN --- */

        $rootScope.initialize();

    }]);