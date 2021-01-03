import { useState } from 'react';
import { Form as FormikForm, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useAuth, useDatabase } from '../../providers';
import clsx from 'clsx';

export default function Form({
                                 children,
                                 className,
                                 collection,
                                 initialValues,
                             }) {

    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const db = useDatabase();
    const history = useHistory();

    function handleSubmit(values) {
        setLoading(true);

        const data = {
            ...values,
            user_uid: auth.user.uid,
        };
        delete data.id;

        let promise;
        if (initialValues && initialValues.id) {
            promise = db.update(collection, initialValues.id, data);
        } else {
            promise = db.add(collection, data);
        }

        promise.then(() => {
            setLoading(false);
            history.push(`/${collection}`);
        });
    }

    const formClasses = clsx({
        'opacity-70 pointer-events-none': loading,
    }, className);

    return <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
        <FormikForm className={formClasses}>{children}</FormikForm>
    </Formik>;

}