/*global app*/
(function () {
    "use strict";
    app.controller('EventsController', ['$scope','$location','eventData',
        function ($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();

        $scope.navigateToDetails = function (event) {
            $location.url('/event/' + event.id);
        };
    }]);
}());