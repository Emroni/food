import { useEffect, useState } from 'react';
import { useDatabase } from '../../providers';
import { Button, Protected, Search, Table } from '../../components';

export default function List() {

    const db = useDatabase();
    const [rows, setRows] = useState([]);

    const columns = [
        {
            name: 'name',
        },
        {
            name: 'website',
            type: 'url',
        },
    ];

    useEffect(() => {
        setRows(db.stores);
    }, [db.stores]);

    return <>
        <div className="flex justify-between mb-2">
            <Search data={db.stores} onChange={setRows}/>
            <Protected>
                <Button className="ml-2" icon="plus" to="/stores/create"/>
            </Protected>
        </div>
        <Table collection="stores" columns={columns} rows={rows}/>
    </>;

}