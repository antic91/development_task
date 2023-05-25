const {formatResponse, getDayName, getStartOfWeek, validateDate, validateFormat} = require('../utils/dateHelpers');

function getRandomMonday(date) {

    if (!validateDate(date)) {
        return "The string is not a valid date format!!!"
    }

    if (!validateFormat(date)) {
         return "Date Format should be YYYY-MM-DD!!!"
    }

    if (getDayName(date) === "Monday") {
        return date;
    };

    const startOfWeekDay = getStartOfWeek(date)

    return formatResponse(startOfWeekDay);

}

module.exports = {
    getRandomMonday
}