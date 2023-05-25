// Import the required dependencies
const { formatResponse, getDayName } = require('../utils/dateHelpers');
const { subWeeks, previousMonday } = require('date-fns');


/**
 * getLastMonday function returns the date of the last Monday from the current date.
 * @returns {string} - The last Monday date in the format 'YYYY-MM-DD'.
 */
function getLastMonday() {

    // Get the current date
    const date = new Date();

    // Check if the current date is already a Monday
    if (getDayName(date) === "Monday") {
        // If it is a Monday, subtract 1 week to get the previous Monday and return it
        const previousMondayDate = subWeeks(date, 1);
        return formatResponse(previousMondayDate);
    };

    // Get the date of the previous Monday from the current date
    const previousMondayDate = previousMonday(date);

    // Format the previous Monday date and return it
    return formatResponse(previousMondayDate);

}

// Export the getLastMonday function
module.exports = {
    getLastMonday
}