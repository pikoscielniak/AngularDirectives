/*global app, angular*/
app.directive('greeting', function () {
    "use strict";

    return {
        restrict: 'E',
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: 'GreetingController'
//        controller: '@',    <greeting ctrl="GreetingController"/>
//        name: 'ctrl'
    };
});

app.controller('GreetingController', ['$scope', function ($scope) {
    "use strict";
    $scope.sayHello = function () {
        alert('Hello');
    };
}]);