import clsx from 'clsx';
import { useDatabase } from '../../providers';
import { Icon } from '../';

export default function EditToggle() {

    const db = useDatabase();

    function handleToggle() {
        db.setEditing(!db.editing);
    }

    const buttonClasses = clsx('leading-none p-3', {
        'text-gray-500': !db.editing,
    });

    return <button className={buttonClasses} title="Edit" type="button" onClick={handleToggle}>
        <Icon name="edit"/>
    </button>;

}