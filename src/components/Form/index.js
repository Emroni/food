import { Form as FormikForm, Formik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Button } from '../';

export default function Form({
                                 collection,
                                 children,
                                 doc,
                                 initialValues,
                             }) {

    const db = useDatabase();
    const history = useHistory();
    const params = useParams();

    function handleDelete() {
        if (window.confirm('Are you sure you want to delete this?')) {
            db.remove(collection, params.id);
            history.push(`/${collection}`);
        }
    }

    function handleSubmit(values) {
        if (doc) {
            db.update(collection, params.id, values);
        } else {
            db.add(collection, values);
        }
        history.push(`/${collection}`);
    }

    return <Formik initialValues={doc || initialValues} onSubmit={handleSubmit}>
        <FormikForm className="bg-gray-100 p-2">
            <table className="w-full">
                <tbody>
                    {children}
                </tbody>
            </table>
            <div className="flex justify-between flex-row-reverse">
                <Button icon={doc ? 'check' : 'plus'} type="submit"/>
                {doc && (
                    <Button className="text-red-500" icon="times" type="button" onClick={handleDelete}/>)}
            </div>
        </FormikForm>
    </Formik>;

}