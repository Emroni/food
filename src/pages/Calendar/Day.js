import { useEffect, useState } from 'react';
import { Form } from '../../components';
import Meals from './Meals';
import { getDate } from '../../helpers';

export default function Day({
                                data,
                                meals,
                            }) {

    const [costs, setCosts] = useState(0);
    const [date, setDate] = useState(null);

    useEffect(() => {
        const costs = ((meals.breakfast && meals.breakfast.price) || 0) + ((meals.lunch && meals.lunch.price) || 0) + ((meals.dinner && meals.dinner.price) || 0);
        setCosts(costs);

        const date = getDate(data.date);
        setDate(date);
    }, [
        data,
        meals,
    ]);

    return <Form className="group mb-4 md:flex" collection="calendar" doc={data}>
        <div className="bg-gray-500 px-2 py-1 text-white md:w-28 lg:w-36 group-hover:bg-gray-600">
            <div className="flex justify-between">
                <span className="font-bold">{date && date.format('ddd')}</span>
                <span>{costs}</span>
            </div>
            <div className="text-gray-200">{date && date.format('DD-MM')}</div>
        </div>
        <Meals data={meals}/>
    </Form>;

}