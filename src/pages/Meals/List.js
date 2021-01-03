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
            render: renderVendor,
        },
        {
            name: 'price',
            align: 'right',
        },
    ];

    function renderVendor(value, row) {
        if (row.restaurant) {
            const restaurant = db.find('restaurants', row.restaurant);
            return <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>;
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