import { useDatabase } from '../../providers';
import { Button, Link, Table } from '../../components';

export default function List() {

    const db = useDatabase();

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
        },
        {
            name: 'carbs',
            render: renderNutrition,
        },
        {
            name: 'fat',
            render: renderNutrition,
        },
        {
            name: 'protein',
            render: renderNutrition,
        },
        {
            name: 'calories',
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

    return <>
        <div className="flex justify-end mb-2">
            <Button icon="plus" to="/meals/create"/>
        </div>
        <Table collection="meals" columns={columns} rows={db.meals}/>
    </>;

}