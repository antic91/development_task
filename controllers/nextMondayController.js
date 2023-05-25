// Import the required dependencies
const nextMondayService = require('../services/nextMondayService');

/**
 * getNextMonday function is a controller function that handles the request to retrieve the date of the next Monday.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
function getNextMonday(req, res) {

    // Call the getNextMonday function from the nextMondayService module to get the date of the next Monday
    const response = nextMondayService.getNextMonday();

    // Send the response back to the client
    res.send(response);
}

// Export the getNextMonday function as an object
module.exports = {
    getNextMonday
}