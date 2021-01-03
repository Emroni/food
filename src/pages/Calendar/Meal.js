import { Select } from '../../components';

export default function Meal({
                                 time,
                             }) {

    return <div className="bg-gray-100 flex-1 ml-0.5 px-2 py-1">
        <Select collection="meals" name={time}/>
    </div>

}