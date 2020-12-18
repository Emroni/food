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
        {
            collection: 'stores',
            name: 'store',
        },
        {
            name: 'size',
            align: 'right',
        },
        {
            name: 'price',
            align: 'right',
        },
    ];

    useEffect(() => {
        setRows(db.ingredients);
    }, [db.ingredients]);

    return <>
        <div className="flex justify-between mb-2">
            <Search data={db.ingredients} onChange={setRows}/>
            <Button className="ml-2" icon="plus" to="/ingredients/create"/>
        </div>
        <Table collection="ingredients" columns={columns} rows={rows}/>
    </>;

}