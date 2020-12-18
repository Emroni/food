import { useState } from 'react';
import { useDatabase } from '../../providers';
import { Button, Search, Table } from '../../components';

export default function List() {

    const db = useDatabase();
    const [rows, setRows] = useState(db.ingredients);

    const columns = [
        {
            name: 'name',
        },
        {
            collection: 'stores',
            name: 'store',
        },
        {
            name: 'price',
            align: 'right',
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
    ];

    return <>
        <div className="flex justify-between mb-2">
            <Search data={db.ingredients} onChange={setRows}/>
            <Button className="ml-2" icon="plus" to="/ingredients/create"/>
        </div>
        <Table collection="ingredients" columns={columns} rows={rows}/>
    </>;

}