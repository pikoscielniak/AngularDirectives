describe('calendarHelper', function () {
    beforeEach(module('ngApp'));

    it('should return Styczen when given a zero', inject(function (calendarHelper) {
        expect(calendarHelper.getMonthName(0)).toBe('Styczen');
    }));
});