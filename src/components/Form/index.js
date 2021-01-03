import React, { useState } from 'react';
import { Form as FormikForm, Formik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth, useDatabase } from '../../providers';
// import { Button, Divider } from '../';
import clsx from 'clsx';

// TODO: Fix on Meals and Restaurants
export default function Form({
                                 children,
                                 className,
                                 collection,
                                 doc,
                                redirect,
                             }) {

    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const db = useDatabase();
    const history = useHistory();
    const params = useParams();

    children = React.Children.toArray(children);

    const initialValues = doc || {};
    children.forEach(child => {
        const {
            name,
            type,
        } = child.props;
        if (!initialValues[name]) {
            initialValues[name] = type === 'number' ? 0 : '';
        }
    });

    // function handleDelete() {
    //     if (window.confirm('Are you sure you want to delete this?')) {
    //         db.remove(collection, params.id);
    //         history.push(`/${collection}`);
    //     }
    // }

    function handleSubmit(values) {
        setLoading(true);

        const data = {
            ...values,
            user_uid: auth.user.uid,
        };
        delete data.id;

        let promise;
        if (doc && doc.id) {
            promise = db.update(collection, doc.id, data);
        } else {
            promise = db.add(collection, data);
        }

        promise.then(doc => {
            setLoading(false);
            if (redirect) {
                const id = (doc && doc.id) || params.id;
                history.push(`/${collection}/${id}`);
            }
        });
    }

    const formClasses = clsx({
        'opacity-70 pointer-events-none': loading,
    }, className);

    return <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
        <FormikForm className={formClasses}>
            {children}
            {/*<table>
                <thead>
                    <tr>
                        <th colSpan={2}>{doc ? doc.name : 'Add'}</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map((child, index) => child.props.name ?
                        <tr key={index}>
                            <th>{child.props.name.replace(/_/g, ' ')}</th>
                            <td>{child}</td>
                        </tr> :
                        <tr key={index}>
                            <td colSpan={2}>{child}</td>
                        </tr>)}
                </tbody>
            </table>
            <Divider/>
            <div className="flex justify-between flex-row-reverse">
                <Button className="text-green-500" icon={doc ? 'check' : 'plus'} type="submit"/>
                {doc && (
                    <Button className="text-red-500" icon="times" type="button" onClick={handleDelete}/>)}
            </div>*/}
        </FormikForm>
    </Formik>;

}