import { Form as FormikForm, Formik } from 'formik';
import { Button } from '../index';

export default function Form({
                                 button,
                                 children,
                                 initialValues,
                                 onSubmit,
                             }) {

    return <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormikForm className="bg-gray-100 p-2">
            <table className="w-full">
                <tbody>
                    {children}
                </tbody>
            </table>
            <div className="text-right">
                <Button icon={button} type="submit"/>
            </div>
        </FormikForm>
    </Formik>;

}