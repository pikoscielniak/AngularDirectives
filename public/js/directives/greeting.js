/*global app, angular*/
app.directive('greeting', function () {
    "use strict";

    return {
        restrict: 'E',
        transclude:true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: 'GreetingController'
//        controller: '@',    <greeting ctrl="GreetingController"/>
//        name: 'ctrl'
    };
});

app.directive('finnish', function () {
    "use strict";

    return {
        require: '^greeting',
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    };
});

app.directive('polish', function () {
    "use strict";

    return {
        require: '^greeting',
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('Cześć');
        }
    };
});

app.controller('GreetingController', ['$scope', function ($scope) {
    "use strict";
    var greetings = ['Hello'];
    $scope.sayHello = function () {
        alert(greetings.join());
    };
    this.addGreeting = function (greeting) {
        greetings.push(greeting);
    };

}]);