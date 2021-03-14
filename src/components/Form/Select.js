import { useField } from 'formik';
import { useAuth, useDatabase } from '../../providers';

export default function Select({
                                   collection,
                                   name,
                                   label,
                                   ...props
                               }) {

    const [field] = useField(name)
    const auth = useAuth();
    const db = useDatabase();

    return <select className="p-1 w-full" disabled={!auth.user} name={name} {...field} {...props}>
        <option value=""/>
        {db[collection].map((doc, index) =>
            <option key={index} value={doc.id}>
                {doc.name}
            </option>)}
    </select>;

}