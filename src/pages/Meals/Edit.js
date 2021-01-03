import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Form, Select, TextField } from '../../components';

export default function Edit() {

    const db = useDatabase();
    const params = useParams();

    const doc = params.id && db.meals.find(doc => doc.id === params.id);

    return <Form collection="meals" doc={doc}>
        <TextField name="name"/>
        <Select collection="restaurants" name="restaurant"/>
        <TextField name="price" type="number"/>
    </Form>;

}