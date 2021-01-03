import { useEffect, useState } from 'react';
import { Link, Select } from '../../components';
import { useField } from 'formik';
import { useDatabase } from '../../providers';

export default function Meal({time}) {

    const [field] = useField(time);
    const [meal, setMeal] = useState(null);
    const db = useDatabase();

    useEffect(() => {
        const meal = field.value && db.find('meals', field.value);
        setMeal(meal);
    }, [
        db,
        field.value,
    ]);

    return <div className="flex-1">
        <div className="bg-gray-400 capitalize flex-1 px-2 py-1 text-white md:hidden">{time}</div>
        <div className="bg-gray-100 flex-1 p-1 md:ml-0.5 group-hover:bg-gray-200">
            <Select collection="meals" name={time}/>
            {meal && (
                <div className="flex p-1 mt-1">
                    <Link restaurant={meal.restaurant}/>
                    <div className="flex-1 text-right">{meal.price}</div>
                </div>)}
        </div>
    </div>;

}