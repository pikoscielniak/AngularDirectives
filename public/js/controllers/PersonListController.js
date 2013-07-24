/*global app*/
(function () {
    "use strict";
    app.controller('PersonListController', ['$scope', function ($scope) {
        $scope.persons = [
            {
                firstName: "First Name 1",
                lastName: "Last Name 1",
                upVoteCount: 0
            },
            {
                firstName: "First Name 2",
                lastName: "Last Name 2",
                upVoteCount: 0
            }
        ];

        $scope.upVote = function (person) {
            person.upVoteCount = person.upVoteCount + 1;
        };
        $scope.downVote = function (person) {
            person.upVoteCount = person.upVoteCount - 1;
        };
    }]);
}());
