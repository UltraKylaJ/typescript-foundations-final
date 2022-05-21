import moment from 'moment';

export function generateDate() {
    let now = moment().format('LLLL');
    return now;
}