'use strict';

angular.module('lostcoin-web').controller('CategoryBrowseCtrl', ['$rootScope', '$scope', 'categoryService', 'utilityService', function ($rootScope, $scope, categoryService, utilityService) {

        /* --- MODELS --- */

        // $scope.categories

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.categories = [];

            $scope.getCategories();

        };

        $scope.getCategories = function () {

            categoryService.getCategories($rootScope.user.id).then(function (response) {

                $scope.categories = response.data;

            });

        };

        $scope.deleteCategory = function (i) {

            categoryService.deleteCategory($scope.categories[i].id).then(function (response) {

                $scope.categories.splice(i, 1);
                
                utilityService.notify('Category deleted!');

            });

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);