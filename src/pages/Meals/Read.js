import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Button, Link, Protected } from '../../components';

export default function Read() {

    const db = useDatabase();
    const params = useParams();

    const doc = db.meals.find(doc => doc.id === params.id);

    function getRestaurant() {
        if (doc.restaurant) {
            const restaurant = db.find('restaurants', doc.restaurant);
            return <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>;
        }
    }

    return <>
        <Protected role="admin">
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
                    <th>restaurant</th>
                    <td>{getRestaurant()}</td>
                </tr>
                <tr>
                    <th>price</th>
                    <td>{doc.price}</td>
                </tr>
            </tbody>
        </table>
    </>;

}