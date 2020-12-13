import { useDatabase } from '../../providers';

export function Row({
                        columns,
                        data,
                    }) {

    const db = useDatabase();
    
    function handleUpdate(e) {
        let {name, value} = e.currentTarget;
        if (!isNaN(value)) {
            value = parseFloat(value);
        }

        if (data[name] !== value) {
            db.update(data.collection, data.id, name, value);
        }
    }

    return <tr className="bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
        {columns.map((column, index) =>
            <td align={column.align || 'left'} className="px-2 py-1" key={index}>
                {db.editing ?
                    <input className="w-full" defaultValue={data[column.name]} name={column.name} type={column.type || 'text'} onBlur={handleUpdate}/> : data[column.name]}
            </td>)}
    </tr>;

}