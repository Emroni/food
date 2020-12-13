import { useDatabase } from '../../providers';
import { Icon } from '../';

export default function EditToggle() {

    const db = useDatabase();

    function handleToggle() {
        db.setEditing(!db.editing);
    }

    return <button className="leading-none p-3" title={db.editing ? 'Done' : 'Edit'} type="button" onClick={handleToggle}>
        <Icon name={db.editing ? 'check' : 'edit'}/>
    </button>;

}