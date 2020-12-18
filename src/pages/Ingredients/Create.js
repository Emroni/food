import { Form, NutritionixField, TextField } from '../../components';

export default function Create() {

    return <Form collection="ingredients">
        <NutritionixField name="name"/>
        <TextField name="carbs" type="number"/>
        <TextField name="fat" type="number"/>
        <TextField name="protein" type="number"/>
        <TextField name="calories" type="number"/>
    </Form>;

}