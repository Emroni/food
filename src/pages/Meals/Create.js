import { Form, Select, TextField } from '../../components';

export default function Create() {

    return <Form collection="meals">
        <TextField name="name"/>
        <Select collection="restaurants" name="restaurant"/>
        <Select collection="stores" name="store"/>
        <TextField name="price" type="number"/>
    </Form>;

}