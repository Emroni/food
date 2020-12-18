import { Form, TextField } from '../../components';

export default function Create() {

    return <Form collection="stores">
        <TextField name="name"/>
        <TextField name="website" type="url"/>
    </Form>;

}