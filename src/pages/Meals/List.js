import { useEffect, useState } from 'react';
import { useDatabase } from '../../providers';
import { Button, Link, Protected, Search, Table } from '../../components';

export default function List() {

    const db = useDatabase();
    const [rows, setRows] = useState([]);

    const columns = [
        {
            name: 'name',
        },
        {
            name: 'restaurant',
            render: (value, row) =>
                <Link restaurant={row.restaurant}/>,
        },
        {
            name: 'price',
            align: 'right',
        },
    ];

    useEffect(() => {
        setRows(db.meals);
    }, [db.meals]);

    return <>
        <div className="flex justify-between mb-2">
            <Search data={db.meals} onChange={setRows}/>
            <Protected>
                <Button className="ml-2" icon="plus" to="/meals/create"/>
            </Protected>
        </div>
        <Table collection="meals" columns={columns} rows={rows}/>
    </>;

}