import { useDatabase } from '../../providers';
import { Table } from '../../components';

export default function Stores() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
    ];

    return <Table columns={columns} rows={db.stores}/>;

}