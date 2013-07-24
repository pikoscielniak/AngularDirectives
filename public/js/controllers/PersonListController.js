/*global app*/
(function () {
    "use strict";
    app.controller('PersonListController', ['$scope', function ($scope) {
        $scope.persons = [
            {
                firstName: "First Name 1",
                lastName: "Last Name 1"
            },
            {
                firstName: "First Name 2",
                lastName: "Last Name 2"
            }
        ];
    }]);
}());
