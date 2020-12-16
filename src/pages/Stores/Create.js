import { Form, TextField } from '../../components';

export default function Create() {

    const initialValues = {
        name: '',
    };

    return <Form collection="stores" initialValues={initialValues}>
        <TextField name="name"/>
    </Form>;

}