import { Form, TextField } from '../../components';

export default function Create() {

    return <Form collection="restaurants">
        <TextField name="name"/>
        <TextField name="website" type="url"/>
    </Form>;

}