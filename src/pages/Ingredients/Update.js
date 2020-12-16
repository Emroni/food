import { useHistory, useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Form, NutritionixField, TextField } from '../../components';

export default function Update() {

    const db = useDatabase();
    const history = useHistory();
    const params = useParams();

    function handleSubmit(values) {
        db.update('ingredients', params.id, values);
        history.push('/ingredients');
    }

    return <Form button="check" initialValues={db.ingredient[params.id]} onSubmit={handleSubmit}>
        <NutritionixField name="name"/>
        <TextField name="carbs" type="number"/>
        <TextField name="fat" type="number"/>
        <TextField name="protein" type="number"/>
        <TextField name="calories" type="number"/>
    </Form>;

}