/*global angular*/
var app = angular.module('smartApplication', [])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        "use strict";

        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.otherwise({redirectTo: '/sampleDirective'});
    }]);