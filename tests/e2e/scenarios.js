'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function () {

//
    it('should automatically redirect to /sampleDirective when location hash/fragment is empty', function () {
        browser().navigateTo('/');
        expect(browser().location().path()).toBe("/sampleDirective");
    });

    describe('events', function () {

        beforeEach(function () {
            browser().navigateTo('/#/persons');
        });

        it('should render the persons page', function () {
            expect(element('h1:first').text()).toMatch(/Osoby/);
            pause();
            expect(element('h2:first').text()).toMatch(/First Name 1/);
        });

        it('should have 2 persons', function () {
            expect(repeater('.persons div').count()).toBe(4);

//            select('query').option('introductory');
//            expect(repeater('.persons div').count()).toBe(2);
//
//            select('sortorder').option('-upVoteCount');
//            expect(element('h4.id').text()).toMatch(/How To Program/);

            //log in
//            browser().navigateTo('/login');
//            input('user.userName').enter('bob');
//            input('user.password').enter('bob');
//            element(':button.btn').click();
//            element('div.well:first').click();
//            element('.votingButton:first').click();
//            expect(element('.voteCount:fist').text()).toBe('1');
        });
    });

});