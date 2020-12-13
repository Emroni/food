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
        },
        {
            name: 'fat',
            align: 'right',
        },
        {
            name: 'protein',
            align: 'right',
        },
        {
            name: 'calories',
            align: 'right',
        },
    ];

    return <Table columns={columns} rows={db.ingredients}/>;

}