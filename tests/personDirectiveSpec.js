describe('personDirective', function () {
    var el, stubShowDetails;


    beforeEach(module('ngApp'));
    beforeEach(module('templates/directives/person.html'));
//    beforeEach(inject(function ($httpBackend, $rootScope, $templateCache) {
//        $templateCache.put('templates/directives/person.html',
//            $templateCache.get('/templates/directives/person.html'));
//        $httpBackend.when('GET', '/templates/directives/person.html').respond(
//            '<div class="person span3"> <div class="span3">   <label class="personLabel">First name:<span>{{ person.firstName }}</span>' +
//                ' </label>  <label class="personLabel">Last name:<span>{{ person.lastName }}</span></label> ' +
//                ' <label class="personLabel">Vote count:<span>{{ person.upVoteCount }}</span></label>   </div>    </div>');
//    }));


    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope;
        scope.person = {firstName: 'jan', lastName: 'kow', upVoteCount: 4};
        stubShowDetails = sinon.stub();
        scope.myShowDetails = stubShowDetails;
        el = angular.element('<person person="person" show-details="myShowDetails(event)" />');

        $compile(el)(scope);
        scope.$digest();
        console.log("ELEMENT: " + el[0].innerHTML);
    }));

    it('should bind the data', function () {
        expect(el.text()).toContain('jan');
    });

    it("should bind to the scopes event", function () {
        el.click();
        expect(stubShowDetails.called).toBe(true);
    });
});