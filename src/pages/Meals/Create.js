import { Form, TextField } from '../../components';

export default function Create() {

    return <Form collection="meals">
        <TextField name="name"/>
    </Form>;

}