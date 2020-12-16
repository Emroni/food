import { useField } from 'formik';

export default function TextField({
                                      name,
                                      label,
                                      ...props
                                  }) {

    const [field] = useField(name);

    return <tr className="hover:bg-gray-50">
        <td className="p-1">
            {label || name}
        </td>
        <td className="p-1">
            <input className="pl-1 w-full" name={name} {...field} {...props}/>
        </td>
    </tr>;

}