const randomMondayService = require('../services//randomMondayService');

function getRandomMonday(req, res) {

    const date = req.params.date;

    const response = randomMondayService.getRandomMonday(date);

    res.send(response);
}

module.exports = {
    getRandomMonday
}