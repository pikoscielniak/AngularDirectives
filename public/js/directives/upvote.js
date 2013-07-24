/*global app, angular*/
app.directive('upvote', function ($compile) {
    "use strict";

    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upVote: "&",
            downVote: "&",
            count: "="
        }
    };
});