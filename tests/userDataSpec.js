describe('userData', function () {
    "use strict";
    var mockUserResource;

    beforeEach(module('ngApp'));

    beforeEach(function () {
        mockUserResource = sinon.stub({get: function () {
        },
            save: function () {
        }});
        module(function ($provide) {
            $provide.value('userResource', mockUserResource);
        });
    });

    describe('getUser', function () {

        it('should call getresource.get with the username', inject(function (userData) {
            userData.getUser('bob');

            expect(mockUserResource.get.args[0][0]).toEqual({userName: 'bob'});
        }));

        it('should return whatever userResource.get returns', inject(function (userData) {
            mockUserResource.get.returns('angular rocks');

            var result = userData.getUser('bob');

            expect(result).toBe('angular rocks');
        }));
    });

    describe('save', function () {
        it('should call userResource.save with the same parameter', inject(function (userData) {
            userData.save('some value');

            expect(mockUserResource.save.calledWith('some value')).toBe(true);
        }));
    });

});