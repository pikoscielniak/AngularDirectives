/*global angular*/
var app = angular.module('ngApp', ['ngResource'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        "use strict";

        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.when('/directiveControllerSample',
            {
                templateUrl: 'templates/directiveControllerSample.html',
                controller: 'DirectiveControllerSample'
            });

        $routeProvider.when('/directiveCompileSample',
            {
                templateUrl: 'templates/directiveCompileSample.html',
                controller: 'DirectiveCompileSample'
            });

        $routeProvider.when('/persons',
            {
                templateUrl: 'templates/PersonList.html',
                controller: 'PersonListController'
            });
        $routeProvider.otherwise({redirectTo: '/sampleDirective'});
    }]);