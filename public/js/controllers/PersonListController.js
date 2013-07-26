/*global app*/
(function () {
    "use strict";
    app.controller('PersonListController', ['$scope', function ($scope) {
        $scope.persons = [
            {
                firstName: "First Name 1",
                lastName: "Last Name 1",
                upVoteCount: 0,
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit libero veritatis ' +
                    'voluptates. Atque dicta, dignissimos dolorem ducimus est, eveniet fugit id inventore nam odio' +
                    ' provident qui quia sit. Quidem!'
            },
            {
                firstName: "First Name 2",
                lastName: "Last Name 2",
                upVoteCount: 0,
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit libero veritatis ' +
                    'voluptates. Atque dicta, dignissimos dolorem ducimus est, eveniet fugit id inventore nam odio' +
                    ' provident qui quia sit. Quidem!'
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
