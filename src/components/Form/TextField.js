import { useField } from 'formik';
import { Button } from '../index';

export default function TextField({
                                      name,
                                      label,
                                      type,
                                      ...props
                                  }) {

    const [field] = useField(name);

    return <div className="flex">
        <input className="px-2 py-1 w-full" name={name} type={type} {...field} {...props}/>
        {type === 'url' && (
            <Button className="ml-2" disabled={!field.value} href={field.value} icon="external-link-alt"/>)}
    </div>;

}