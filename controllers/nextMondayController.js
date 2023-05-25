
const nextMondayService = require('../services/nextMondayService');

function getNextMonday(req, res) {
    
    const response = nextMondayService.getNextMonday();

    res.send(response);
}

module.exports = {
    getNextMonday
}