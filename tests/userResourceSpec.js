describe('userResource', function () {

    beforeEach(module('ngApp'));

    describe('get', function () {
        it('should issue a GET request to /data/user/bob when the username is bob',
            inject(function (userResource, $httpBackend, $rootScope) {
                $httpBackend.when('GET', '/data/user/bob').respond({name: 'Robert'});
                var user = userResource.get({userName: 'bob'});
                $rootScope.$digest();
                $httpBackend.flush();

                expect(user.name).toBe('Robert');
            }));
    });
});