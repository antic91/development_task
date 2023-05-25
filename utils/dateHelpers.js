// Import required functions from the 'date-fns' library
const { isValid, parse, format, startOfWeek } = require('date-fns');

/**
 * Formats the given date in the format 'yyyy-MM-dd' and returns the formatted string.
 * @param {string | Date} date - The input date to be formatted.
 * @returns {string} The formatted date string.
 */
const formatResponse = (date) => {
    return format(new Date(date), "yyyy-MM-dd", new Date());
}

/**
 * Returns the day name (e.g., Monday, Tuesday) for the given date.
 * @param {string | Date} date - The input date.
 * @returns {string} The day name.
 */
const getDayName = (date)=>{
    return format(new Date(date), 'EEEE');
}

/**
 * Returns the start of the week for the given date.
 * @param {string | Date} date - The input date.
 * @returns {Date} The start of the week.
 */
const getStartOfWeek = (date) => {
    return startOfWeek(new Date(date), { weekStartsOn: 1});
}

/**
 * Validates if the given date is a valid date'.
 * @param {string} date - The input date string.
 * @returns {boolean} True if the date is valid, false otherwise.
 */
const validateDate = (date) => {
    return isValid(new Date(date), 'yyyy-MM-dd', new Date());
}

/**
 * Validates if the given date string matches the format 'yyyy-MM-dd'.
 * @param {string} date - The input date string.
 * @returns {boolean} True if the date format is valid, false otherwise.
 */
const validateFormat = (date) => {
    return format(new Date(date), 'yyyy-MM-dd', new Date()) === date;
}

// Export the functions as an object
module.exports = {
    formatResponse, getDayName, getStartOfWeek, validateDate, validateFormat
}