import { useEffect, useState } from 'react';
import { useDatabase } from '../../providers';
import { Link } from '../../components';

export default function Day({date}) {

    const db = useDatabase();
    const [day, setDay] = useState({});

    useEffect(() => {
        if (date) {
            const formattedDate = date.format('YYYY-MM-DD');
            const day = db.calendar.find(item => item.date === formattedDate);
            if (day) {
                setDay(day);
            }
        }
    }, [
        db.calendar,
        date,
    ]);

    return <>
        <td className="border-l border-white">
            <Link meal={day.breakfast}/>
        </td>
        <td className="border-l border-white">
            <Link meal={day.lunch}/>
        </td>
        <td className="border-l border-white">
            <Link meal={day.dinner}/>
        </td>
    </>;

}