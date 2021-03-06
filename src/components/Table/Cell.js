import { useDatabase } from '../../providers';
import { Image, Link } from '../index';

export default function Cell({
                                 children,
                                 column,
                                 row,
                             }) {

    const db = useDatabase();

    if (column.render) {
        children = column.render(children, row, column);

    } else if (children) {
        if (column.collection) {
            const doc = db[column.collection].find(doc => doc.id === children);
            children = doc &&
                <Link to={`/${column.collection}/${doc.id}`}>
                    {doc.name}
                </Link>;

        } else if (column.type === 'thumbnail') {
            children =
                <Image size="2xl" src={children}/>;

        } else if (column.type === 'url') {
            children =
                <Link href={children}>
                    {children}
                </Link>;
        }
    }

    return <td align={column.align}>
        {children}
    </td>;

}