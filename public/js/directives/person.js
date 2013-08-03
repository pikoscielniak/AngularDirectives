/*global app, angular*/
app.directive('person', function () {
    "use strict";

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/person.html',
        scope: {
            person: "=person",
            showDetails: "&"
        }
    };
});