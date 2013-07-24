/*global app, angular*/
app.directive('mySample', ['$compile', function ($compile) {
    "use strict";

    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleData' /> {{ sampleData }}<br />",
        link: function (scope, element, attrs, controller) {

        }
    };
}]);