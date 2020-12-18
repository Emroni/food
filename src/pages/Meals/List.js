import { useDatabase } from '../../providers';
import { Button, Table } from '../../components';

export default function List() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
        {
            collection: 'restaurants',
            name: 'restaurant',
        },
        {
            collection: 'stores',
            name: 'store',
        },
        {
            name: 'price',
        },
    ];

    return <>
        <div className="flex justify-end mb-2">
            <Button icon="plus" to="/meals/create"/>
        </div>
        <Table collection="meals" columns={columns} rows={db.meals}/>
    </>;

}