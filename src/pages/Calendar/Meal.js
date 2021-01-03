import { Select } from '../../components';

export default function Meal({time}) {

    return <div className="flex-1">
        <div className="bg-gray-400 capitalize flex-1 px-2 py-1 text-white md:hidden">{time}</div>
        <div className="bg-gray-100 flex-1 px-2 py-1 md:ml-0.5 group-hover:bg-gray-200">
            <Select collection="meals" name={time}/>
        </div>
    </div>;

}