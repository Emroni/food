import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Form, NutritionixField, TextField } from '../../components';

export default function Update() {

    const db = useDatabase();
    const params = useParams();

    const doc = db.ingredients.find(doc => doc.id === params.id);

    return <Form collection="ingredients" doc={doc}>
        <NutritionixField name="name"/>
        <TextField name="carbs" type="number"/>
        <TextField name="fat" type="number"/>
        <TextField name="protein" type="number"/>
        <TextField name="calories" type="number"/>
    </Form>;

}