import { useDatabase } from '../../providers';
import { Button, Table } from '../../components';

export default function List() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
        {
            name: 'website',
            type: 'url',
        },
    ];

    return <>
        <div className="flex justify-end mb-2">
            <Button icon="plus" to="/restaurants/create"/>
        </div>
        <Table collection="restaurants" columns={columns} rows={db.restaurants}/>
    </>;

}