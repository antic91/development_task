// Import the required dependencies
const randomMondayService = require('../services//randomMondayService');

/**
 * getRandomMonday function is a controller function that handles the request to retrieve a random Monday date based on the provided date parameter.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
function getRandomMonday(req, res) {

    // Extract the 'date' parameter from the request
    const date = req.params.date;

    // Call the getRandomMonday function from the randomMondayService module to get a random Monday date
    const response = randomMondayService.getRandomMonday(date);

    // Send the response back to the client
    res.send(response);
}

// Export the getRandomMonday function as an object
module.exports = {
    getRandomMonday
}