import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Divider, Form, Select, TextField } from '../../components';

export default function Edit() {

    const db = useDatabase();
    const params = useParams();

    const doc = params.id && db.meals.find(doc => doc.id === params.id);

    return <Form collection="meals" doc={doc}>
        <TextField name="name"/>
        <Select collection="restaurants" name="restaurant"/>
        <Select collection="stores" name="store"/>
        <TextField name="price" type="number"/>
        <Divider/>
        <TextField name="additional_carbs" type="number"/>
        <TextField name="additional_fat" type="number"/>
        <TextField name="additional_protein" type="number"/>
        <TextField name="additional_calories" type="number"/>
    </Form>;

}