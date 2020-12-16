import { Form, NutritionixField, TextField } from '../../components';

export default function Create() {

    const initialValues = {
        name: '',
        carbs: 0,
        fat: 0,
        protein: 0,
        calories: 0,
    };

    return <Form collection="ingredients" initialValues={initialValues}>
        <NutritionixField name="name"/>
        <TextField name="carbs" type="number"/>
        <TextField name="fat" type="number"/>
        <TextField name="protein" type="number"/>
        <TextField name="calories" type="number"/>
    </Form>;

}