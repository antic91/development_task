const { formatResponse, getDayName } = require('../utils/dateHelpers');
const { subWeeks, previousMonday } = require('date-fns');


function getLastMonday() {

    const date = new Date();

    if (getDayName(date) === "Monday") {
        const previousMondayDate = subWeeks(date, 1);
        return formatResponse(previousMondayDate);
    };

    const previousMondayDate = previousMonday(date);

    return formatResponse(previousMondayDate);

}

module.exports = {
    getLastMonday
}