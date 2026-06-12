/* eslint-disable react/no-danger */
/* eslint-disable */
import moment from 'moment-timezone';
export const isValidDate = (dt, format = 'DD/MM/YYYY') => {
    let m = moment(dt, format);
    return m.isValid();
};

export const stringToDate = (_date, _format, _delimiter) => {
    let formatLowerCase = _format.toLowerCase();
    let formatItems = formatLowerCase.split(_delimiter);
    let dateItems = _date.split(_delimiter);
    let monthIndex = formatItems.indexOf('mm');
    let dayIndex = formatItems.indexOf('dd');
    let yearIndex = formatItems.indexOf('yyyy');
    let month = parseInt(dateItems[monthIndex]);
    month -= 1;
    let formatedDate = new Date(dateItems[yearIndex], month, dayIndex != -1 ? dateItems[dayIndex] : 0);
    return formatedDate;
}

export const showDate = (dt, isDefault = false) => {
    if (isDefault) {
        dt = moment(dt).format('DD/MM/YYYY');
    } else {
        dt = moment.utc(dt).tz('Australia/Sydney').format('DD/MM/YYYY');
    }
    if (dt === 'Invalid date') return '-';
    return dt;
};

