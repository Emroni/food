import { useField } from 'formik';

export default function TextField({
                                      name,
                                      label,
                                      ...props
                                  }) {

    const [field] = useField(name);

    return <div className="flex m-1 even:bg-gray-50">
        <div className="p-1 w-1/4">{label || name}</div>
        <input className="pl-1 w-3/4" name={name} {...field} {...props}/>
    </div>;

}