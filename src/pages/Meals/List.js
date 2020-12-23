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
            name: 'vendor',
            render: renderVendor,
        },
        {
            name: 'price',
            align: 'right',
        },
        {
            name: 'carbs',
            align: 'right',
            render: renderNutrition,
        },
        {
            name: 'fat',
            align: 'right',
            render: renderNutrition,
        },
        {
            name: 'protein',
            align: 'right',
            render: renderNutrition,
        },
        {
            name: 'calories',
            align: 'right',
            render: renderNutrition,
        },
    ];

    function renderNutrition(value, row, column) {
        return row[`additional_${column.name}`];
    }

    function renderVendor(value, row) {
        let vendor;
        if (row.restaurant) {
            vendor = db.find('restaurants', row.restaurant);
        } else if (row.store) {
            vendor = db.find('stores', row.store);
        }
        return vendor &&
            <Link href={vendor.website}>{vendor.name}</Link>;
    }

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