import { useEffect, useState } from 'react';
import { getStartOfWeek } from '../../helpers';
import Day from './Day';

export default function Calendar() {

    const [dates, setDates] = useState([]);

    useEffect(() => {
        const start = getStartOfWeek();
        const dates = new Array(7)
            .fill(0)
            .map((item, index) => start.clone()
                .add(index, 'day'));
        setDates(dates);
    }, []);

    return <table className="table-fixed">
        <thead>
            <tr>
                <th className="w-40" colSpan={2}/>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
            </tr>
        </thead>
        <tbody>
            {dates.map((date, index) =>
                <tr key={index}>
                    <th>{date.format('ddd')}</th>
                    <th className="text-gray-500 text-right">{date.format('DD-MM')}</th>
                    <Day date={date}/>
                </tr>)}
        </tbody>
    </table>;

}