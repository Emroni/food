import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import Meal from './Meal';

export default function Meals({data}) {

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

    return <div className="flex-1 md:flex">
        <Meal data={data.breakfast} time="breakfast"/>
        <Meal data={data.lunch} time="lunch"/>
        <Meal data={data.dinner} time="dinner"/>
    </div>;

}