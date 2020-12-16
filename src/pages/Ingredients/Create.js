import { useHistory } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Form, NutritionixField, TextField } from '../../components';

export default function Create() {

    const db = useDatabase();
    const history = useHistory();

    const initialValues = {
        name: '',
        carbs: 0,
        fat: 0,
        protein: 0,
        calories: 0,
    }

    function handleSubmit(values) {
        db.add('ingredients', values);
        history.push('/ingredients');
    }

    return <Form button="plus" initialValues={initialValues} onSubmit={handleSubmit}>
        <NutritionixField name="name"/>
        <TextField name="carbs" type="number"/>
        <TextField name="fat" type="number"/>
        <TextField name="protein" type="number"/>
        <TextField name="calories" type="number"/>
    </Form>;

}