import { useField } from 'formik';
import { Button } from '../index';

export default function TextField({
                                      name,
                                      label,
                                      type,
                                      ...props
                                  }) {

    const [field] = useField(name);

    return <tr className="hover:bg-gray-50">
        <td className="p-1">
            {label || name}
        </td>
        <td className="p-1">
            <div className="flex">
                <input className="pl-1 w-full" name={name} type={type} {...field} {...props}/>
                {type === 'url' && (
                    <Button className="ml-2" disabled={!field.value} href={field.value} icon="external-link-alt"/>)}
            </div>
        </td>
    </tr>;

}