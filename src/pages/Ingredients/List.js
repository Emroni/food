import { useDatabase } from '../../providers';
import { Table } from '../../components';

export default function List() {

    const db = useDatabase();

    const columns = [
        {
            autocomplete: 'nutritionix',
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

    return <Table collection="ingredients" columns={columns} rows={db.ingredients}/>;

}