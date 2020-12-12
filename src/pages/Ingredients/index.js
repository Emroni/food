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
        },
        {
            name: 'fat',
        },
        {
            name: 'protein',
        },
        {
            name: 'calories',
        },
    ];

    return <Table columns={columns} rows={db.ingredients}/>;

}