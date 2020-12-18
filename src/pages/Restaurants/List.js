import { useEffect, useState } from 'react';
import { useDatabase } from '../../providers';
import { Button, Search, Table } from '../../components';

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
        setRows(db.restaurants);
    }, [db.restaurants]);

    return <>
        <div className="flex justify-between mb-2">
            <Search data={db.restaurants} onChange={setRows}/>
            <Button className="ml-2" icon="plus" to="/restaurants/create"/>
        </div>
        <Table collection="restaurants" columns={columns} rows={rows}/>
    </>;

}