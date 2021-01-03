import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

export function getDate(value) {
    return value ? dayjs(value) : dayjs();
}

export function getStartOfWeek(date) {
    return getDate(date)
        .startOf('isoWeek');
}