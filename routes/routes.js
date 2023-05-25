const express = require('express');

const router = express.Router();

const nextMondayController = require("../controllers/nextMondayController");
const lastMondayController = require("../controllers/lastMondayController");
const randomMondayController = require("../controllers/randomMondayController");

router.get('/next', nextMondayController.getNextMonday);
router.get('/last', lastMondayController.getLastMonday);
router.get('/:date', randomMondayController.getRandomMonday);


module.exports = router;