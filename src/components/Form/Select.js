import { useField } from 'formik';
import { useDatabase } from '../../providers';

export default function Select({
                                   collection,
                                   name,
                                   label,
                                   ...props
                               }) {

    const db = useDatabase();
    const [field] = useField(name);

    return <tr className="hover:bg-gray-50">
        <td className="p-1">
            {label || name}
        </td>
        <td className="p-1">
            <select className="pl-1 w-full" name={name} {...field} {...props}>
                <option value=""/>
                {db[collection].map((doc, index) => <option key={index} value={doc.id}>
                    {doc.name}
                </option>)}
            </select>
        </td>
    </tr>;

}