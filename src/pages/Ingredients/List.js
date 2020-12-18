import { useDatabase } from '../../providers';
import { Button, Table } from '../../components';

export default function List() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
        {
            collection: 'stores',
            name: 'store',
        },
        {
            name: 'price',
            align: 'right',
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

    return <>
        <div className="flex justify-end mb-2">
            <Button icon="plus" to="/ingredients/create"/>
        </div>
        <Table collection="ingredients" columns={columns} rows={db.ingredients}/>
    </>;

}