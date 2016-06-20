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

                .state('category', {
                    abstract: true,
                    template: '<ui-view/>',
                    url: '/category'
                })

                .state('category.browse', {
                    controller: 'CategoryBrowseCtrl',
                    templateUrl: 'modules/category/category-browse.html',
                    url: '/browse'
                })

                .state('category.form', {
                    controller: 'CategoryFormCtrl',
                    templateUrl: 'modules/category/category-form.html',
                    url: '/form'
                })

                .state('report', {
                    abstract: true,
                    template: '<ui-view/>',
                    url: '/report'
                })

                .state('report.individual', {
                    controller: 'ReportIndividualCtrl',
                    templateUrl: 'modules/report/report-individual.html',
                    url: '/individual'
                })

                .state('report.family', {
                    controller: 'ReportFamilyCtrl',
                    templateUrl: 'modules/report/report-family.html',
                    url: '/family'
                })

                .state('transaction', {
                    abstract: true,
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