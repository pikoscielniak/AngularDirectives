/*global app, angular*/
app.directive('mySample', function () {
    "use strict";

    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleData' /> {{ sampleData }}<br />",
        scope: {

        }
    };
});