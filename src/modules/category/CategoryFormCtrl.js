'use strict';

angular.module('lostcoin-web').controller('CategoryFormCtrl', ['$rootScope', '$scope', 'categoryService', 'utilityService', function ($rootScope, $scope, categoryService, utilityService) {

        /* --- MODELS --- */

        // $scope.category

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.category = {
                name: null
            };

        };

        $scope.saveCategory = function () {

            var category = angular.copy($scope.category);

            category.user = $rootScope.user.id;

            categoryService.saveCategory(category).then(function () {

                utilityService.notify('Catgeory saved!');

                $rootScope.changeState('category.browse');

            });

        };

        /* --- RUN --- */

        if ($rootScope.user === null) {

            $rootScope.changeState('home');

        } else {

            $scope.initialize();

        }

    }]);