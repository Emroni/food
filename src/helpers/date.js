import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isoWeek);
dayjs.extend(isToday);

export function getDate(value) {
    return value ? dayjs(value) : dayjs();
}

export function getStartOfWeek(date) {
    return getDate(date)
        .startOf('isoWeek');
}