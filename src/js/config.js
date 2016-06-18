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
                })

                .state('transaction', {
                    abstract: true,
                    controller: 'TransactionCtrl',
                    template: '<ui-view/>',
                    url: '/transaction'
                })

                .state('transaction.browse', {
                    controller: 'TransactionBrowseCtrl',
                    templateUrl: 'modules/transaction/transaction-browse.html',
                    url: '/browse'
                })

                .state('transaction.form', {
                    controller: 'TransactionFormCtrl',
                    templateUrl: 'modules/transaction/transaction-form.html',
                    url: '/form'
                });

    }]);