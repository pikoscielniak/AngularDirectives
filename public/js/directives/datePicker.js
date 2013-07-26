/*global app, angular*/
app.directive('datePicker', function () {
    "use strict";

    return {
        restrict: 'A',
        link: function (scope, element) {
            element.datepicker();
        }
    };
});