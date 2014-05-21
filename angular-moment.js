(function (angular, moment) {
    'use strict';
    

    var namespacePrefix = 'moment',
        moduleName = 'angular-moment',
        momentModule = angular.module(moduleName, []),
        utilsModule = angular.module(moduleName + '/utils', []),
        filtersModule = angular.module(moduleName+ '/filters', []);
        
    function capitalize (input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
        

    momentModule.filter("moment", function () {
        return function (input) {
            return moment(input);
        };
    });

    var filterFactory = function (name) {
        momentModule.filter(namespacePrefix + capitalize(name), function () {
            return function (input, arg) {
                var tmp;
                switch (name) {
                    case 'daysInMonth': 
                        tmp = moment(input, "YYYY-MM");
                        break;
                    case 'endOf': return moment().endOf(input);
                        break;
                    default: tmp = moment(input);
                }
                return tmp[name].apply(tmp, Array.prototype.slice.call(arguments, 1));
            };
        });
    }
    
    
    
    var filters = [
        "add",
        "calendar",
        "day",
        "dayOfYear",
        "days",
        "daysInMonth",
        "diff",
        "endOf",
        "format",
        "from",
        "fromNow",
        "get",
        "hasAlignedHourOffset",
        "hour",
        "hours",
        "invalidAt",
        "isAfter",
        "isBefore",
        "isDST",
        "isDSTShifted",
        "isLeapYear",
        "isSame",
        "isValid",
        "isoWeek",
        "isoWeekYear",
        "isoWeekday",
        "isoWeeks",
        "isoWeeksInYear",
        "lang",
        "local",
        "max",
        "millisecond",
        "milliseconds",
        "min",
        "minute",
        "minutes",
        "month",
        "months",
        "parseZone",
        "parsingFlags",
        "quarter",
        "quarters",
        "second",
        "seconds",
        "set",
        "startOf",
        "subtract",
        "toArray",
        "toDate",
        "toISOString",
        "toJSON",
        "toString",
        "tz",
        "unix",
        "utc",
        "valueOf",
        "week",
        "weekYear",
        "weekday",
        "weeks",
        "weeksInYear",
        "year",
        "years",
        "zone",
        "zoneAbbr",
        "zoneName"
    ];
    
    angular.forEach(filters, function (filterName) {
        filterFactory(filterName);
    });
    
}(angular, moment));