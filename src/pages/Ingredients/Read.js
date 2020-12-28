import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Button, Protected } from '../../components';

export default function Read() {

    const db = useDatabase();
    const params = useParams();

    const doc = db.ingredients.find(doc => doc.id === params.id);

    return <>
        <Protected>
            <div className="flex justify-end mb-2">
                <Button icon="edit" to={`/ingredients/${doc.id}/update`}/>
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
                    <th>image</th>
                    <td>{doc.image}</td>
                </tr>
                <tr>
                    <th>carbs</th>
                    <td>{doc.carbs}</td>
                </tr>
                <tr>
                    <th>fat</th>
                    <td>{doc.fat}</td>
                </tr>
                <tr>
                    <th>protein</th>
                    <td>{doc.protein}</td>
                </tr>
                <tr>
                    <th>calories</th>
                    <td>{doc.calories}</td>
                </tr>
                <tr>
                    <th>store</th>
                    <td>{doc.store}</td>
                </tr>
                <tr>
                    <th>size</th>
                    <td>{doc.size}</td>
                </tr>
                <tr>
                    <th>price</th>
                    <td>{doc.price}</td>
                </tr>
            </tbody>
        </table>
    </>;

}