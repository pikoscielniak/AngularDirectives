/*global app*/
app.directive('collapsible', function () {
    "use strict";

    return {
        restirct: 'EA',
        replace: true,
        template: "<div><h4 ng-click=\"toggleVisibility()\" class=\"well-title\">{{ title }}</h4><div ng-show=\"visible\" ng-transclude></div></div>",
        transclude: true,
        scope: {
            title: '@'
        },
        controller: ['$scope', function ($scope) {
            $scope.visible= true;
            $scope.toggleVisibility = function () {
                $scope.visible = !$scope.visible;
            };
        }]
    };
});