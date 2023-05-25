const lastMondayService = require('../services/lastMondayService');

function getLastMonday(req, res) {

    const response = lastMondayService.getLastMonday();

    res.send(response);
}

module.exports = {
    getLastMonday
}