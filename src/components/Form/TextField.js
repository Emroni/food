import { useField } from 'formik';
import { useAuth } from '../../providers';
import { Button } from '../index';

export default function TextField({
                                      name,
                                      label,
                                      type,
                                      ...props
                                  }) {

    const [field] = useField(name);
    const auth = useAuth();

    return <div className="flex">
        <input className="px-2 py-1 w-full" disabled={!auth.user} name={name} type={type} {...field} {...props}/>
        {type === 'url' && (
            <Button className="ml-1" disabled={!field.value} href={field.value} icon="external-link-alt"/>)}
    </div>;

}