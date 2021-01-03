import { useEffect, useState } from 'react';
import { getStartOfWeek } from '../../helpers';

export default function Calendar() {

    const [days, setDays] = useState([]);

    useEffect(() => {
        const days = [];
        const start = getStartOfWeek();
        for (let i = 0; i < 7; i++) {
            const date = start.clone()
                .add(i, 'day');

            days.push({
                breakfast: '',
                date,
                dinner: '',
                lunch: '',
            });
        }
        setDays(days);
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
            {days.map((day, index) =>
                <tr key={index}>
                    <th>{day.date.format('ddd')}</th>
                    <th className="text-gray-500 text-right">{day.date.format('DD-MM')}</th>
                    <td className="border-l border-white">{day.breakfast}</td>
                    <td className="border-l border-white">{day.breakfast}</td>
                    <td className="border-l border-white">{day.breakfast}</td>
                </tr>)}
        </tbody>
    </table>;

}