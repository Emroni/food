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
        if (row.restaurant) {
            const restaurant = db.find('restaurants', row.restaurant);
            return <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>;
        } else if (row.store) {
            const store = db.find('stores', row.store);
            return <Link to={`/stores/${store.id}`}>{store.name}</Link>;
        }
    }

    useEffect(() => {
        setRows(db.meals);
    }, [db.meals]);

    return <>
        <div className="flex justify-between mb-2">
            <Search data={db.meals} onChange={setRows}/>
            <Protected role="admin">
                <Button className="ml-2" icon="plus" to="/meals/create"/>
            </Protected>
        </div>
        <Table collection="meals" columns={columns} rows={rows}/>
    </>;

}