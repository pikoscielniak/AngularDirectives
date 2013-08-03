/* global app*/

app.factory('calendarHelper', function () {
    "use strict";

    var monthNames = ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien",
        "Październik", "Listopad", "Grudzien"];

    return {
        getCalendarDays: function (year, month) {
            var monthStartDate = new Date(year, month, 1);
            var days = [];
            for (var idx = 0; idx < monthStartDate.getDay(); idx++) {
                days.push('');
            }
            for (idx = 1; idx <= new Date(year, month + 1, 0).getDate(); idx++) {
                days.push(idx);
            }
            return days;
        },
        getMonthName: function (monthNumber) {
            return monthNames[monthNumber];
        }
    };
});