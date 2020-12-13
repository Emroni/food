import { useDatabase } from '../../providers';
import { Table } from '../../components';

export default function Ingredients() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
        {
            name: 'carbs',
            align: 'right',
            type: 'number',
        },
        {
            name: 'fat',
            align: 'right',
            type: 'number',
        },
        {
            name: 'protein',
            align: 'right',
            type: 'number',
        },
        {
            name: 'calories',
            align: 'right',
            type: 'number',
        },
    ];

    return <Table columns={columns} rows={db.ingredients}/>;

}