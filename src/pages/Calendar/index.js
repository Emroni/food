import { useEffect, useState } from 'react';
import { getStartOfWeek } from '../../helpers';
import { useDatabase } from '../../providers';
import Day from './Day';

export default function Calendar() {

    const [costs, setCosts] = useState(null);
    const [days, setDays] = useState([]);
    const db = useDatabase();

    useEffect(() => {
        const start = getStartOfWeek();

        const days = new Array(7)
            .fill(0)
            .map((item, index) => {
                const date = start.clone()
                    .add(index, 'day')
                    .format('YYYY-MM-DD');

                const data = db.calendar.find(item => item.date === date) || {
                    date,
                };

                return {
                    data,
                    meals: {
                        breakfast: data.breakfast_uid && db.find('meals', data.breakfast_uid),
                        dinner: data.dinner_uid && db.find('meals', data.dinner_uid),
                        lunch: data.lunch_uid && db.find('meals', data.lunch_uid),
                    },
                };
            });
        setDays(days);

        const costs = {
            breakfast: 0,
            dinner: 0,
            lunch: 0,
        };
        days.forEach(day => {
            costs.breakfast += (day.meals.breakfast && day.meals.breakfast.price) || 0;
            costs.lunch += (day.meals.lunch && day.meals.lunch.price) || 0;
            costs.dinner += (day.meals.dinner && day.meals.dinner.price) || 0;
        });
        setCosts(costs);
    }, [db]);

    return <>
        <div className="mb-4 text-white md:flex md:mb-2">
            <div className="bg-gray-700 flex justify-between px-2 py-1 text-right md:w-28 lg:w-36">
                <span>Total</span>
                <span className="font-bold">{costs && (costs.breakfast + costs.lunch + costs.dinner)}</span>
            </div>
            <div className="bg-gray-400 capitalize flex flex-1 justify-between px-2 py-1 md:ml-0.5">
                <span className="font-bold">Breakfast</span>
                <span>{costs && costs.breakfast}</span>
            </div>
            <div className="bg-gray-400 capitalize flex flex-1 justify-between px-2 py-1 md:ml-0.5">
                <span className="font-bold">Lunch</span>
                <span>{costs && costs.lunch}</span>
            </div>
            <div className="bg-gray-400 capitalize flex flex-1 justify-between px-2 py-1 md:ml-0.5">
                <span className="font-bold">Dinner</span>
                <span>{costs && costs.dinner}</span>
            </div>
        </div>
        {days.map((day, index) =>
            <Day key={index} {...day}/>)}
    </>;

}