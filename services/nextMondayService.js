const { formatResponse } = require('../utils/dateHelpers');
const { nextMonday } = require('date-fns');

function getNextMonday() {

    const date = new Date();

    const nextMondayDate = nextMonday(date);

    return formatResponse(nextMondayDate);

}

module.exports = {
    getNextMonday
}