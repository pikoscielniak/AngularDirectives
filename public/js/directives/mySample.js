/*global app, angular*/
app.directive('mySample', function ($compile) {
    "use strict";

    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleData' /> {{ sampleData }}<br />",
        scope: {

        }
    };
});