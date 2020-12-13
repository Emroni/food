import { useDatabase } from '../../providers';
import { Icon } from '../';

export default function EditToggle() {

    const db = useDatabase();

    function handleToggle() {
        db.setEditMode(!db.isEditMode);
    }

    return <button className="leading-none p-3" type="button" onClick={handleToggle}>
        <Icon name={db.isEditMode ? 'times' : 'edit'}/>
    </button>;

}