// Import the required dependencies
const { formatResponse } = require('../utils/dateHelpers');
const { nextMonday } = require('date-fns');

/**
 * getNextMonday function returns the date of the next Monday from the current date.
 * @returns {string} - The next Monday date in the format 'YYYY-MM-DD'.
 */
function getNextMonday() {

    // Get the current date
    const date = new Date();

    // Get the date of the next Monday from the current date
    const nextMondayDate = nextMonday(date);

    // Format the next Monday date and return it
    return formatResponse(nextMondayDate);

}

// Export the getNextMonday function
module.exports = {
    getNextMonday
}