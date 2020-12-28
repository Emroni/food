import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Button, Link, Protected } from '../../components';

export default function Read() {

    const db = useDatabase();
    const params = useParams();

    const doc = db.meals.find(doc => doc.id === params.id);

    function getNutrition(type) {
        return doc[`additional_${type}`];
    }

    let vendor;
    if (doc.restaurant) {
        vendor = db.find('restaurants', doc.restaurant);
    } else if (doc.store) {
        vendor = db.find('stores', doc.store);
    }

    return <>
        <Protected>
            <div className="flex justify-end mb-2">
                <Button icon="edit" to={`/meals/${doc.id}/update`}/>
            </div>
        </Protected>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>{doc.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>vendor</th>
                    <td>
                        {vendor && (
                            <Link href={vendor.website}>{vendor.name}</Link>)}
                    </td>
                </tr>
                <tr>
                    <th>price</th>
                    <td>{doc.price}</td>
                </tr>
                <tr>
                    <th>carbs</th>
                    <td>{getNutrition('carbs')}</td>
                </tr>
                <tr>
                    <th>fat</th>
                    <td>{getNutrition('fat')}</td>
                </tr>
                <tr>
                    <th>protein</th>
                    <td>{getNutrition('protein')}</td>
                </tr>
                <tr>
                    <th>calories</th>
                    <td>{getNutrition('calories')}</td>
                </tr>
            </tbody>
        </table>
    </>;

}