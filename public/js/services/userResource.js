app.factory('userResource', ['$resource', function ($resource) {
    "use strict";

    var service = $resource('/data/user/:userName', {userName: '@userName'}, {});

    service.queryAll = function (callback) {
        return service.query({}, callback());
    };
    return service;
}]);