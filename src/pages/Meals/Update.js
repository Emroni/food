import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Form, TextField } from '../../components';

export default function Update() {

    const db = useDatabase();
    const params = useParams();

    const doc = db.meals.find(doc => doc.id === params.id);

    return <Form collection="meals" doc={doc}>
        <TextField name="name"/>
    </Form>;

}