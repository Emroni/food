import { useDatabase } from '../../providers';
import { Button, Table } from '../../components';

export default function List() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
    ];

    return <>
        <div className="flex justify-end mb-2">
            <Button icon="plus" to="/stores/create"/>
        </div>
        <Table collection="stores" columns={columns} rows={db.stores}/>
    </>;

}