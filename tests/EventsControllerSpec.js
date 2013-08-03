/* global describe, beforeEach, it, expect,inject,module,sinon */
describe('EventListController', function () {
    "use strict";
    var scope, $controllerConstructor, mockEventData;

    beforeEach(module("ngApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function () {
        }});
        $controllerConstructor = $controller;
    }));

    it('should set the scope events to the result of eventData.getAllEvents', function () {
        var mockEvent = {};
        mockEventData.getAllEvents.returns(mockEvent);

        var ctrl = $controllerConstructor('EventsController',
            {$scope: scope, $location: {}, eventData: mockEventData });

        expect(scope.events).toBe(mockEvent);
    });

    it('should navigate to the correct url when navigateToDetails is called', function () {
        var mockLocation = sinon.stub({url: function () {
        }});

        var ctrl = $controllerConstructor('EventsController',
            {$scope: scope, $location: mockLocation, eventData: mockEventData });

        var event = {
            id: 23
        };

        scope.navigateToDetails(event);
        expect(mockLocation.url.calledWith('/event/23')).toBe(true);
    });

});