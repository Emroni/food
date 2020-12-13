import { useDatabase } from '../../providers';
import { Input } from './Input';

export function Row({
                        columns,
                        data,
                    }) {

    const db = useDatabase();

    function handleSuggestion(suggestion) {
        db.update(data.collection, data.id, suggestion);
    }

    function handleUpdate(name, value) {
        db.update(data.collection, data.id, {
            [name]: value,
        });
    }

    return <tr className="bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
        {columns.map((column, index) =>
            <td align={column.align || 'left'} className="px-2 py-1" key={index}>
                {db.editing ?
                    <Input value={data[column.name]} {...column} onSuggestion={handleSuggestion} onUpdate={handleUpdate}/> : data[column.name]}
            </td>)}
    </tr>;

}