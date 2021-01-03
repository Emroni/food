import { useHistory, useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Button, Divider, Form, Select, TextField } from '../../components';

export default function Edit() {

    const db = useDatabase();
    const history = useHistory();
    const params = useParams();

    const initialValues = (params.id && db.meals.find(doc => doc.id === params.id)) || {
        name: '',
        restaurant: '',
        price: 0,
    };

    function handleDelete() {
        if (window.confirm('Are you sure you want to delete this meal?')) {
            db.remove('meals', params.id);
            history.push('/meals');
        }
    }

    return <Form collection="meals" initialValues={initialValues}>
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
                    <th>Restaurant</th>
                    <td>
                        <Select collection="restaurants" name="restaurant"/>
                    </td>
                </tr>
                <tr>
                    <th>Number</th>
                    <td>
                        <TextField name="price" type="number"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <Divider/>
        <div className="flex justify-between flex-row-reverse">
            <Button className="text-green-500" icon={params.id ? 'check' : 'plus'} type="submit"/>
            {params.id && (
                <Button className="text-red-500" icon="times" type="button" onClick={handleDelete}/>)}
        </div>
    </Form>;

}