import { useDatabase } from '../../providers';
import { Link } from '../index';

export default function Cell({
                                 children,
                                 column,
                             }) {

    const db = useDatabase();

    if (children) {
        if (column.collection) {
            const doc = db[column.collection].find(doc => doc.id === children);
            children = doc &&
                <Link to={`/${column.collection}/${doc.id}`}>
                    {doc.name}
                </Link>;

        } else if (column.type === 'url') {
            children =
                <Link href={children}>
                    {children}
                </Link>;
        }
    }

    return <td align={column.align || 'left'} className="px-2 py-1">
        {children}
    </td>;

}