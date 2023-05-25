// Import the required dependencies
const { formatResponse, getDayName, getStartOfWeek, validateDate, validateFormat } = require('../utils/dateHelpers');

/**
 * getRandomMonday function returns a random Monday based on the given date.
 * @param {string} date - The input date string in the format 'YYYY-MM-DD'.
 * @returns {string} - The random Monday date in the format 'YYYY-MM-DD', or an error message.
 */
function getRandomMonday(date) {

    // Validate if the input date is not a string
    if (!validateDate(date)) {
        return "The string is not a valid date format!!!"
    }

    // Validate if the input date has the correct format 'YYYY-MM-DD'
    if (!validateFormat(date)) {
         return "Date Format should be YYYY-MM-DD!!!"
    }

    // Check if the input date is already a Monday
    if (getDayName(date) === "Monday") {
        return date;
    };

    // Get the start of the week (Monday) for the input date
    const startOfWeekDay = getStartOfWeek(date)

    // Format the start of the week date and return it
    return formatResponse(startOfWeekDay);

}

// Export the getRandomMonday function
module.exports = {
    getRandomMonday
}