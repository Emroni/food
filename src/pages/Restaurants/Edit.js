import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Form, TextField } from '../../components';

export default function Edit() {

    const db = useDatabase();
    const params = useParams();

    const doc = params.id && db.restaurants.find(doc => doc.id === params.id);

    return <Form collection="restaurants" doc={doc}>
        <TextField name="name"/>
        <TextField name="website" type="url"/>
    </Form>;

}