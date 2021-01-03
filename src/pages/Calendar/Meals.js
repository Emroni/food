import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import Meal from './Meal';

export default function Meals() {

    const {
        dirty,
        isSubmitting,
        submitForm,
    } = useFormikContext();

    useEffect(() => {
        if (dirty && !isSubmitting) {
            submitForm();
        }
    }, [
        dirty,
        isSubmitting,
        submitForm,
    ])

    return <>
        <Meal time="breakfast"/>
        <Meal time="lunch"/>
        <Meal time="dinner"/>
    </>;

}