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

    return <>
        <div className="hidden mb-1 text-white md:flex">
            <div className="w-28"/>
            <div className="bg-gray-400 capitalize flex-1 ml-0.5 px-2 py-1">Breakfast</div>
            <div className="bg-gray-400 capitalize flex-1 ml-0.5 px-2 py-1">Lunch</div>
            <div className="bg-gray-400 capitalize flex-1 ml-0.5 px-2 py-1">Dinner</div>
        </div>
        {dates.map((date, index) =>
            <Day date={date} key={index}/>)}
    </>;

}