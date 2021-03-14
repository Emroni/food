import { useHistory, useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Button, Divider, Form, Protected, TextField } from '../../components';

export default function Edit() {

    const db = useDatabase();
    const history = useHistory();
    const params = useParams();

    const initialValues = (params.id && db.restaurants.find(doc => doc.id === params.id)) || {
        name: '',
        website: '',
    };

    function handleDelete() {
        if (window.confirm('Are you sure you want to delete this restaurant?')) {
            db.remove('restaurants', params.id);
            history.push('/restaurants');
        }
    }

    return <Form collection="restaurants" initialValues={initialValues}>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>{params.id ? initialValues.name : 'Add'}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>
                        <TextField name="name"/>
                    </td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        <TextField name="website" type="url"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <Protected>
            <Divider/>
            <div className="flex justify-between flex-row-reverse">
                <Button className="text-green-500" icon={params.id ? 'check' : 'plus'} type="submit"/>
                {params.id && (
                    <Button className="text-red-500" icon="times" type="button" onClick={handleDelete}/>)}
            </div>
        </Protected>
    </Form>;

}