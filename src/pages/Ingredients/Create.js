import { Form, NutritionixField, Select, TextField } from '../../components';

export default function Create() {

    return <Form collection="ingredients">
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