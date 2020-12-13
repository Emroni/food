import { useDatabase } from '../../providers';
import { Icon } from '../';
import { Input } from './Input';

export function Row({
                        columns,
                        data,
                    }) {

    const db = useDatabase();

    function handleDelete() {
        if (window.confirm('Are you sure you want to delete this item?')) {
            db.remove(data.collection, data.id);
        }
    }

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
        {db.editing && (
            <td align="right">
                <button className="p-1 text-gray-400 hover:text-red-400" type="button" onClick={handleDelete}>
                    <Icon name="times"/>
                </button>
            </td>)}
    </tr>;

}