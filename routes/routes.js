// Import the required dependencies
const express = require('express');

// Create a new router instance
const router = express.Router();

// Import the controller modules
const nextMondayController = require("../controllers/nextMondayController");
const lastMondayController = require("../controllers/lastMondayController");
const randomMondayController = require("../controllers/randomMondayController");

// Define the routes and their corresponding controller functions
router.get('/next', nextMondayController.getNextMonday);
router.get('/last', lastMondayController.getLastMonday);
router.get('/:date', randomMondayController.getRandomMonday);

// Export the router instance
module.exports = router;