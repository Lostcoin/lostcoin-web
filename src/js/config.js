'use strict';

angular.module('lostcoin-web').config(['$compileProvider', '$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function ($compileProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {

        $compileProvider.debugInfoEnabled(false);

        $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('green');

        $urlRouterProvider.otherwise('/');

        $stateProvider

                .state('home', {
                    controller: 'HomeCtrl',
                    templateUrl: 'modules/home/home.html',
                    url: '/'
                });

    }]);