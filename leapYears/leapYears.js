const leapYears = function(year) {

    //divisble by 400 is leap year
    if (year % 400 === 0) return true;
    // divisble by 100 not a leap year
    else if (year % 100 === 0) return false;
    // divisible by 4 is leap year
    else if (year % 4 === 0) return true;
    else return false;
}

module.exports = leapYears

