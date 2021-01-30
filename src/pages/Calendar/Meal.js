import { Link, Select } from '../../components';

export default function Meal({data, time}) {

    return <div className="flex flex-1">
        <div className="bg-gray-400 capitalize mb-1 px-2 py-1 text-white w-28 md:hidden">{time}</div>
        <div className="bg-gray-100 flex-1 mb-1 p-1 md:mb-0 md:ml-0.5 group-hover:bg-gray-200">
            <Select collection="meals" name={`${time}_meal_uid`}/>
            {data && (
                <div className="flex p-1 mt-1">
                    <Link restaurant={data.restaurant}/>
                    <div className="flex-1 text-right">{data.price}</div>
                </div>)}
        </div>
    </div>;

}