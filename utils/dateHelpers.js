const { isValid, parse, format, startOfWeek  } = require('date-fns');


const formatResponse = (date) => {
    return format(new Date(date), "yyyy-MM-dd", new Date());
}

const getDayName = (date)=>{
    return format(new Date(date), 'EEEE');
}

const getStartOfWeek = (date) => {
    return startOfWeek(new Date(date), { weekStartsOn: 1});
}

const validateDate = (date) => {
    return isValid(new Date(date), 'yyyy-MM-dd', new Date());
}

const validateFormat = (date) => {
    return format(new Date(date), 'yyyy-MM-dd', new Date()) === date;
}


module.exports = {
    formatResponse, getDayName, getStartOfWeek, validateDate, validateFormat
}