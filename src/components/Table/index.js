import { Row } from './Row';
import { useAuth, useDatabase } from '../../providers';
import { Icon } from '../';

export function Table({
                          collection,
                          columns,
                          rows,
                      }) {

    const auth = useAuth();
    const db = useDatabase();

    function handleAdd() {
        const data = {};
        columns.forEach(column => {
            data[column.name] = column.type === 'number' ? 0 : '';
        });
        db.add(collection, data)
    }

    return <table className="w-full">
        <thead>
            <tr className="bg-gray-300">
                {columns.map((column, index) =>
                    <th align={column.align || 'left'} className="capitalize px-2 py-1" key={index}>
                        {column.name}
                    </th>)}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, r) =>
                <Row columns={columns} data={row} key={r}/>)}
        </tbody>
        {auth.user && db.editing && (
            <tfoot>
                <tr>
                    <td align="right" colSpan={columns.length}>
                        <button type="button" onClick={handleAdd}>
                            <Icon name="plus"/>
                        </button>
                    </td>
                </tr>
            </tfoot>)}
    </table>;

}