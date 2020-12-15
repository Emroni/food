import { useDatabase } from '../../providers';
import { Table } from '../../components';

export default function List() {

    const db = useDatabase();

    const columns = [
        {
            name: 'name',
        },
    ];

    return <Table collection="meals" columns={columns} rows={db.meals}/>;

}