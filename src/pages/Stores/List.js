import { useDatabase } from '../../providers';
import { Table } from '../../components';

export default function List() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
    ];

    return <Table collection="stores" columns={columns} rows={db.stores}/>;

}