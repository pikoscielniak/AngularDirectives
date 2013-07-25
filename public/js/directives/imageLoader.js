/*global app, angular*/
app.directive('imageLoader', function () {
    "use strict";
    var url = "http://upload.wikimedia.org/wikipedia/en/a/a6/Goofy.svg";
    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function (scope, element, attrs, controller) {
            attrs.$observe('url', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    attrs.$set('src', newValue);
                }
            });
        }
    };
});
