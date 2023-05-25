// Import the required dependencies
const lastMondayService = require('../services/lastMondayService');

/**
 * getLastMonday function is a controller function that handles the request to retrieve the date of the last Monday.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
function getLastMonday(req, res) {

    // Call the getLastMonday function from the lastMondayService module to get the date of the last Monday
    const response = lastMondayService.getLastMonday();

    // Send the response back to the client
    res.send(response);
}


// Export the getLastMonday function as an object
module.exports = {
    getLastMonday
}