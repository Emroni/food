import { useParams } from 'react-router-dom';
import { useDatabase } from '../../providers';
import { Button, Link, Protected } from '../../components';

export default function Read() {

    const db = useDatabase();
    const params = useParams();

    const doc = db.stores.find(doc => doc.id === params.id);

    return <>
        <Protected>
            <div className="flex justify-end mb-2">
                <Button icon="edit" to={`/stores/${doc.id}/update`}/>
            </div>
        </Protected>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>{doc.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>website</th>
                    <td>
                        {doc.website && (
                            <Link href={doc.website}>{doc.website}</Link>)}
                    </td>
                </tr>
            </tbody>
        </table>
    </>;

}