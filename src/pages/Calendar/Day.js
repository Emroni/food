import { useEffect, useState } from 'react';
import { useDatabase } from '../../providers';
import { Form } from '../../components';
import Meals from './Meals';

export default function Day({date}) {

    const [day, setDay] = useState(null);
    const db = useDatabase();
    const formattedDate = date.format('YYYY-MM-DD');

    useEffect(() => {
        const day = db.calendar.find(item => item.date === formattedDate) || {
            date: formattedDate,
        };
        setDay(day);
    }, [
        db.calendar,
        date,
        formattedDate,
    ]);

    return <Form className="flex mb-4" collection="calendar" doc={day}>
        <div className="bg-gray-400 flex justify-between px-2 py-1 w-28">
            <span className="font-bold text-white">{date.format('ddd')}</span>
            <span className="text-gray-200">{date.format('DD-MM')}</span>
        </div>
        <Meals/>
    </Form>;

}