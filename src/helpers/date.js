import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isToday from 'dayjs/plugin/isToday';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(isoWeek);
dayjs.extend(isToday);
dayjs.extend(weekOfYear);

export function getDate(value) {
    return value ? dayjs(value) : dayjs();
}

export function getStartOfWeek(date) {
    return getDate(date)
        .startOf('isoWeek');
}