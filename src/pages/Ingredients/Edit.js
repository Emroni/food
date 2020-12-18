import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Form, NutritionixField, Select, TextField } from '../../components';

export default function Edit() {

    const db = useDatabase();
    const params = useParams();

    const doc = params.id && db.ingredients.find(doc => doc.id === params.id);

    return <Form collection="ingredients" doc={doc}>
        <NutritionixField name="name"/>
        <TextField name="carbs" type="number"/>
        <TextField name="fat" type="number"/>
        <TextField name="protein" type="number"/>
        <TextField name="calories" type="number"/>
        <Select collection="stores" name="store"/>
        <TextField name="size" type="number"/>
        <TextField name="price" type="number"/>
    </Form>;

}