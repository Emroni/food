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

    return <Form className="group mb-4 md:flex" collection="calendar" doc={day}>
        <div className="bg-gray-500 flex justify-between px-2 py-1 md:w-28 group-hover:bg-gray-600">
            <span className="font-bold text-white">{date.format('ddd')}</span>
            <span className="text-gray-200">{date.format('DD-MM')}</span>
        </div>
        <Meals/>
    </Form>;

}