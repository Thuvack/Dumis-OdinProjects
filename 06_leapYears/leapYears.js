const leapYears = function(argYear) {

    let leapYear;
        if (argYear%100 == 0 && argYear % 400 != 0) {
            // Check year is century but not a leap year
            leapYear = false;

        }else if(argYear % 400 == 0 || argYear % 4 == 0) {
            /// Check year is a century leap year or a simple leap year
            leapYear = true;

        } else {
            // Then its not a leap year
            leapYear = false;

        }

    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
